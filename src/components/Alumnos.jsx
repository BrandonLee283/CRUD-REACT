import React, { useState } from 'react'
import '../styles/style.css';

const imagen1 = require('../img/descarga (1).jpg');
const imagen2 = require('../img/descarga (2).jpg');
const imagen3 = require('../img/descarga (3).jpg');
const imagen4 = require('../img/descarga (4).jpg');

const Alumnos = () => {
  const Carreras = [
    { nombre: 'Sistemas' },
    { nombre: 'Administracion' },
    { nombre: 'Civil' },
    { nombre: 'Logistica' },
    { nombre: 'Mecatronica' },
    { nombre: 'Quimica' },

  ]
  const [carreras, SetCarretas] = useState(Carreras)

  const Alumnos = [
    { matricula: 201923139, nombre: 'Brandon', carrera: carreras[0].nombre, foto: imagen1 },
    { matricula: 201923138, nombre: 'Lee', carrera: carreras[1].nombre, foto: imagen2 },
    { matricula: 201923137, nombre: 'Reyes', carrera: carreras[3].nombre, foto: imagen3 },
    { matricula: 201923136, nombre: 'Moreno', carrera: carreras[2].nombre, foto: imagen4 },
  ]
  const [alumnos, SetAlumnos] = useState(Alumnos)

  const registrarAlumnos = (event) => {
    event.preventDefault();
    const matricula = document.querySelector('.inputM').value
    const nombre = document.querySelector('.inputN').value
    const foto = document.querySelector('.inputF').files[0]
    const carrera = document.querySelector('.inputC').selectedIndex
    // const foto = imagen2

    try {
      const existe = alumnos.find(alumno => alumno.matricula === matricula)
      if (existe) {
        alert(`${existe.matricula} ya esta registrado`)
      } else {
        const carreraSeleccionada = (carreras[carrera - 1].nombre)
        const reader = new FileReader()
        reader.readAsDataURL(foto)

        reader.onload = () => {
          SetAlumnos([...alumnos, { matricula: matricula, nombre: nombre, carrera: carreraSeleccionada, foto: reader.result }])
          SetCarretas([...carreras])
        }
        alert('Registrado exitosamente')

        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
      }

    } catch (error) {
      alert('Falta una opcion por registrar')
    }
  }
  // const manejarCambioDeImagen= ()=>{
  //   const imagenSeleccionada = foto.files[0];
  //   const lectorDeArchivos = new FileReader();
  //   lectorDeArchivos.readAsDataURL(imagenSeleccionada);
  //   lectorDeArchivos.onload = function() {
  //   imagenSalida = lectorDeArchivos.result;
  //   }
  // }
  const mostrarAlumnos = () => {
    return alumnos.map((alumno) => (
      <tr key={alumno.matricula}>
        <td>{alumno.matricula}</td>
        <td>{alumno.nombre}</td>
        <td>{alumno.carrera}</td>
        <td><img src={alumno.foto} alt="alumno" className='imgAlumno' /></td>
        <td><button onClick={() => editar(alumno.matricula, alumno.nombre, alumno.foto, alumno.carrera)} target="_blank" className="material-icons">edit</button></td>
        <td><button onClick={() => eliminar(alumno.matricula)} target="_blank" className="material-icons">delete</button></td>
      </tr>
    ))
  }

  const eliminar = (identificador) => {
    // alert(`Has elegido la matricula ${identificador}`)
    alumnos.forEach((alumno, index, arr) => {
      // const index = arr.indexOf('');
      if (alumno.matricula === identificador) {
        if (index !== -1) {
          arr.splice(index, 1);
          alert(`Eliminaste a ${alumno.nombre}`)
          SetAlumnos([...arr])
          mostrarAlumnos()
        }
      }

    })
    //   if (alumno.matricula == identificador) {
    //     alert('Has eliminado a '+alumno.nombre)
    //   }

  }
  const AgregarEdicion = (event) => {
    event.preventDefault()
    document.querySelector('.inputM').disabled = false

    const matricula = document.querySelector('.inputM').value;
    const nombre = document.querySelector('.inputN').value;
    const foto = document.querySelector('.inputF').files[0];
    const carrera = document.querySelector('.inputC').selectedIndex;
  
    const carreraSeleccionada = carreras[carrera-1].nombre;
  
    const indice = alumnos.findIndex(alumno => Number(alumno.matricula) === Number(matricula));
    try {
      if (indice !== -1) {

        const nuevosAlumnos = [...alumnos];
        const reader = new FileReader()
        reader.readAsDataURL(foto)
  
        reader.onload = () => {
        nuevosAlumnos[indice] = {
          matricula: matricula,
          nombre: nombre,
          carrera: carreraSeleccionada,
          foto: reader.result,
        };
        SetAlumnos(nuevosAlumnos);
      }
        alert('Actualizado exitosamente');
        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
  
        const botonEditar = document.querySelector('.btnEditar')
        const botonRegistrar = document.querySelector('.btnRegistrar')
    
        botonEditar.style.display = 'none'
        botonRegistrar.style.display = 'block'
    
      } else {
        alert('El alumno no existe');
        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
  
        const botonEditar = document.querySelector('.btnEditar')
        const botonRegistrar = document.querySelector('.btnRegistrar')
    
        botonEditar.style.display = 'none'
        botonRegistrar.style.display = 'block'

        
      }
      
    } catch (error) {
      alert('Falta un campo por llenar')
    }
    
  };

  const renderizarFormulario = () => {
    // alert(matricula+nombre+foto)

    return (
      <form action="" className='black'>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa tu matricula</label>
          <input type="text" id="disabledTextInput" className="form-control inputM" placeholder="Ingresa tu Matricula" />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa tu Nombre</label>
          <input type="text" id="disabledTextInput" className="form-control inputN" placeholder="Ingresa tu Nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa tu Foto</label>
          <input type="file" id="disabledTextInput" className="form-control inputF" placeholder="Ingresa tu Foto" />
        </div>
        <label htmlFor="seleccion">Selecciona una carrera:</label>
        <select className='inputC' id="seleccion" name="seleccion">
          <option>Selecciona una Carrera</option>
          {
            carreras.map((carrera, index) => (
              <option key={index} value={index}>{carrera.nombre}</option>
            ))
          }


        </select>
        <br /><br />
        <button type="submit" className="btn btn-primary btnRegistrar" onClick={registrarAlumnos}>Registrar</button>
        <button type="submit" className="btn btn-primary btnEditar" onClick={AgregarEdicion} style={{ display: 'none' }}>Editar</button>

      </form>
    )
  }
  const editar = (m, n, f, c) => {

    const busquedaIntex = carreras.findIndex(indice => indice.nombre === c)
    document.querySelector('.inputM').value = m
    document.querySelector('.inputM').disabled = true
    document.querySelector('.inputN').value = n
    // const foto = document.querySelector('.inputF')
    document.querySelector('.inputC').value = busquedaIntex

    // foto.files[0] = f
    console.log(f)



    const tabla = document.querySelector('.table')
    const form = document.querySelector('.black')
    tabla.style.display = 'none';
    form.style.display = 'block'
    // renderizarFormulario(matricula,nombre,foto,carrera)

    const botonEditar = document.querySelector('.btnEditar')
    const botonRegistrar = document.querySelector('.btnRegistrar')

    botonEditar.style.display = 'block'
    botonRegistrar.style.display = 'none'

  }
  return (
    <>
      {
        renderizarFormulario()
      }

      <table className="table table-dark table-striped-columns">

        <thead>
          {/* <tr><th>Lista de Alumnos</th></tr> */}
          <tr>
            <th>Matricula</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Foto</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            mostrarAlumnos()
          }
        </tbody>
      </table>

    </>
  )
}

export default Alumnos