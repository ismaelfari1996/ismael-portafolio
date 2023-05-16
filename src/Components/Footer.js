import React from "react";


/**
* Renders Footer with icons. It's used to display footer on top of page.
* 
*/

export default function Footer(){
    return(
        <div className="container-fluid p-3 border d-flex bg-light">
            <label className="d-flex mx-auto">Ismael Farinango - 2023</label>
            <small><a href="https://icons8.com/icons/" target={"_blank"}  className="me-5 text-decoration-none text-muted">Icons by Icons8</a></small>
        </div>
    )
}