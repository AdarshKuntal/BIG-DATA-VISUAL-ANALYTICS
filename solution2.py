import vtk
import argparse
import os

DATA_PATH = os.path.join("Isabel_3D.vti")

def RenderFunction(Phongshading):

    # loading the 3D data 
    reader = vtk.vtkXMLImageDataReader()
    reader.SetFileName(DATA_PATH)
    reader.Update()
    volume_data = reader.GetOutput()
    
    # initializing the color transfer function and Piecewise Function
    tf = vtk.vtkColorTransferFunction()
    tf.AddRGBPoint(-4931.54, 0.0, 1.0, 1.0)
    tf.AddRGBPoint(-2508.95, 0.0, 0.0, 1.0)
    tf.AddRGBPoint(-1873.9, 0.0, 0.0, 0.5)
    tf.AddRGBPoint(-1027.16, 1.0, 0.0, 0.0)
    tf.AddRGBPoint(-298.031, 1.0, 0.4, 0.0)
    tf.AddRGBPoint(2594.97, 1.0, 1.0, 0.0)

    opf = vtk.vtkPiecewiseFunction()
    opf.AddPoint(-4931.54, 1.0)
    opf.AddPoint(101.815, 0.002)
    opf.AddPoint(2594.97, 0.0)

    # outline filter
    outline_filter = vtk.vtkOutlineFilter()
    outline_filter.SetInputData(volume_data)

    # outline filter mapper
    outline_mapper = vtk.vtkPolyDataMapper()
    outline_mapper.SetInputConnection(outline_filter.GetOutputPort())
    
    # outline actor
    outline_actor = vtk.vtkActor()
    outline_actor.SetMapper(outline_mapper)
    outline_actor.GetProperty().SetColor(2, 2, 2)
    
    # volume property mapper and adding the properties to it
    volumeprop = vtk.vtkVolumeProperty()
    volumeprop.SetColor(tf)
    volumeprop.SetScalarOpacity(opf)

    if Phongshading:

        volumeprop.ShadeOn()
        volumeprop.SetAmbient(0.5) #Ambient
        volumeprop.SetDiffuse(0.5) #Diffuse
        volumeprop.SetSpecular(0.5) #Specular
        volumeprop.SetSpecularPower(10)

    volumeprop.SetInterpolationTypeToLinear()

    # volume Mapper
    volume_mapper = vtk.vtkSmartVolumeMapper()
    volume_mapper.SetInputData(volume_data)

    # volume actor
    volume = vtk.vtkVolume()
    volume.SetMapper(volume_mapper)
    volume.SetProperty(volumeprop)

    # Rendering the volume data
    renderer = vtk.vtkRenderer()
    render_window = vtk.vtkRenderWindow()
    render_window.SetSize(1000, 1000)
    render_window.AddRenderer(renderer)
    render_window_interactor = vtk.vtkRenderWindowInteractor()
    render_window_interactor.SetInteractorStyle(vtk.vtkInteractorStyleTrackballCamera())
    render_window_interactor.SetRenderWindow(render_window)
    renderer.SetBackground(0.55, 0.55, 0.55)
    renderer.AddActor(outline_actor)
    renderer.AddVolume(volume)
    render_window.Render()
    render_window_interactor.Start()

if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument("--Phongshading", type = str, choices = ["yes", "no"], default = "no")
    args = parser.parse_args()
    if args.Phongshading == "yes":
        Phongshading = True
    else: 
        Phongshading = False
    
    RenderFunction(Phongshading) #Call . . . . 
