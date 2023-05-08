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
    const aparecerMenuMovil = ()=>{
        const MenuMovil = document.querySelector('.MenuMovil');
        MenuMovil.classList.toggle('disable')
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">SoftCode</a>
                <button className="navbar-toggler btnMovil" onClick={aparecerMenuMovil} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='MenuMovil'>
                    <a className="nav-link manita" onClick={aparecerTabla}>Alumnos</a>
                    <a className="nav-link manita" onClick={aparecerFormulario}>Agregar Alumno</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link manita" onClick={aparecerTabla}>Alumnos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link manita" onClick={aparecerFormulario}>Agregar Alumno</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar