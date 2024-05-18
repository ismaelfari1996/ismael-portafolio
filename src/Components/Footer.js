import React from "react";
import { useState, useEffect } from 'react';
/**
* Renders Footer with icons. It's used to display footer on top of page.
* 
*/

export default function Footer(){
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Esta función se ejecuta cuando el componente se monta
        const interval = setInterval(() => {
          // Actualiza el estado con el año actual cada segundo
          setCurrentYear(new Date().getFullYear());
        }, 1000);
    
        // Esta función se ejecuta cuando el componente se desmonta para limpiar el intervalo
        return () => clearInterval(interval);
      }, []);
    return(
        <div className="container-fluid p-3 border d-flex bg-light">
            <label className="d-flex mx-auto">Ismael Farinango - {currentYear}</label>
            <small><a href="https://icons8.com/icons/" target={"_blank"}  className="me-5 text-decoration-none text-muted">Icons by Icons8</a></small>
        </div>
    )
}