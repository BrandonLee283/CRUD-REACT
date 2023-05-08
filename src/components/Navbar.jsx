import React from 'react'

const Navbar = () => {
    const aparecerTabla = ()=>{
        const tabla = document.querySelector('.table')
        const form = document.querySelector('.black')
        tabla.style.display = 'block';
        form.style.display = 'none'
    }
    const aparecerFormulario = ()=>{
        const tabla = document.querySelector('.table')
        const form = document.querySelector('.black')
        tabla.style.display = 'none';
        form.style.display = 'block'
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">SoftCode</a>
                <button className="navbar-toggler btnMovil" onClick={aparecerFormulario} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={aparecerTabla}>Alumnos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={aparecerFormulario}>Agregar Alumno</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar