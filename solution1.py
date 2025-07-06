import vtk
import os
from vtkmodules.util import numpy_support
import numpy as np
import argparse

DATA_PATH = os.path.join("Isabel_2D.vti")

def isolinepoints(p1, p2, v1, v2, C): #interpolation
#p1 , p2 are points and v1 , v2 are their values & C is isovalue
    if v1 == v2:
        return None
    m = (C - v1) / (v2 - v1)
    P = [p1[i] + m * (p2[i] - p1[i]) for i in range(2)]
    return P

def IsoAlgorithm(C): # isovalue as i/p

    #data processing
    reader = vtk.vtkXMLImageDataReader()
    reader.SetFileName(DATA_PATH)
    reader.Update()
    data = reader.GetOutput()

    dims = data.GetDimensions()
    origin = data.GetOrigin()
    spacing = data.GetSpacing()
    #VTK stores data in column-major order — that's why we are using order = F.
    scalars = numpy_support.vtk_to_numpy(data.GetPointData().GetScalars()).reshape(dims[0], dims[1], order='F')

    points = vtk.vtkPoints()
    lines = vtk.vtkCellArray()

    for i in range(dims[0] - 1):
        for j in range(dims[1] - 1):
            cells = []
            traversal = [(i, j), (i+1, j), (i+1, j+1), (i, j+1)]  # Counter-clockwise traversal in a square cell
            for k in range(4):
                value = scalars[traversal[k][0], traversal[k][1]]
                cells.append(value)

            lineID = []
            for idx in range(4):
                p1, p2 = traversal[idx], traversal[(idx+1)%4]
                value1, value2 = cells[idx], cells[(idx+1)%4]
                if (value1 < C <= value2) or (value2 < C <= value1):
                
                    point1 = [origin[0] + p1[0]*spacing[0], origin[1] + p1[1]*spacing[1]]
                    point2 = [origin[0] + p2[0]*spacing[0], origin[1] + p2[1]*spacing[1]]
                    #Find the intersection points via linear interpolation.
                    coordsInterpolated = isolinepoints(point1, point2, value1, value2, C) 
                    
                    if coordsInterpolated is not None:
                        pid = points.InsertNextPoint(coordsInterpolated[0], coordsInterpolated[1], 0)
                        lineID.append(pid)
                        
            if len(lineID) == 2:  # If two intersection points are found, form a line
                lines.InsertNextCell(2)
                lines.InsertCellPoint(lineID[0])
                lines.InsertCellPoint(lineID[1])

    polydata = vtk.vtkPolyData()
    polydata.SetPoints(points)
    polydata.SetLines(lines)

    writer = vtk.vtkXMLPolyDataWriter()
    writer.SetFileName("IsoContour.vtp")
    writer.SetInputData(polydata)
    writer.Write()

#for Plotting the polydata file
def visualPlot(filename):

    # set up the polydata reader
    reader = vtk.vtkXMLPolyDataReader()
    reader.SetFileName(filename)
    reader.Update()
    pdata = reader.GetOutput()

    # Creating the polydata mapper
    mapper = vtk.vtkPolyDataMapper()
    mapper.SetInputData(pdata)

    # Setting up the polydata actor
    actor = vtk.vtkActor()
    actor.SetMapper(mapper)
    actor.GetProperty().SetLineWidth(3)
    actor.GetProperty().SetColor(0,0,1)

    # Setting the renderer and the render window
    renderer = vtk.vtkRenderer()
    render_window = vtk.vtkRenderWindow()
    render_window.SetSize(1200,900)
    renderer.SetBackground(255, 255, 255)
    render_window_interactor = vtk.vtkRenderWindowInteractor()
    render_window_interactor.SetInteractorStyle(vtk.vtkInteractorStyleTrackballCamera())
    render_window.AddRenderer(renderer)
    renderer.AddActor(actor)
    render_window.SetInteractor(render_window_interactor)
    render_window.Render()
    render_window_interactor.Start()

if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument("--isovalue", type=float, default=0)
    parser.add_argument("--visualize", type=str, default="no")
    args = parser.parse_args()
    C = args.isovalue
    plot = args.visualize

    # condition given in question
    if C > -1438 and C < 630:
        
        IsoAlgorithm(C)
        if plot == "yes":
            visualPlot("isocontour.vtp")
            
    else:
        print("error : isovalue out of range !")
