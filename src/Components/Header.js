import React from "react";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">{"<Isamel/>"}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skill</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}