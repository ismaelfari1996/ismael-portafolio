import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Config from "../../config/config.json";
export default function Project() {
    const [gitHubProjects, setGitHubprojects] = new useState([]);
    const [slice, setSlice]=new useState(4);
    const [showMore, setShowMore]=new useState(true);
    const seccionRef=new useRef(null);

    // Funcion que redirige a una seccion especifica de la pagina
    const scrollToSeccion=()=>{
        seccionRef.current.scrollIntoView({"behavior":"smooth"});
    }

    //Consume la API de Github
    useEffect(() => {
        axios.get(Config.git) //La url se encuentra configurado en config.json
            .then(value => setGitHubprojects(value.data))
            .catch((error) => {
                console.log("ERROR");
            })
    }, []);

    return (
        <div className="container mb-5" id="projects">
            <div className="mb-5">
                <h2 ref={seccionRef} className="border border-4 border-end-0 border-top-0 border-bottom-0 px-2">Portafolio</h2>
            </div>
            <div className="row">
                {
                    //Carga de los proyectos externos, mismo que se encuentran configurados en config.json
                    Object.values(Config.projects).map((project, index) => {
                        return (
                            <div key={index} className="col-md-6" data-aos="fade-right">
                                <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{ "minHeight": "320px" }}>
                                    <div className="card-body">
                                        <div className="row" style={{ "minHeight": "150px" }}>
                                            <h3 className="card-title fw-bold fs-5"> {project.name}</h3>
                                            <p className="card-text text-color">{project.description}</p>
                                        </div>
                                        <hr/>
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <a href={project.url} className="btn btn-outline-primary d-flex mx-auto align-items-center" target={'_blank'} rel="noopener noreferrer">
                                                    <i className="las la-external-link-alt"></i> Visitar</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
                {
                    // Carga los proyectos que se encuentran en GitHub
                    Object.values(gitHubProjects).slice(0,slice).map((project, index) => {
                        return (
                            project.name === "ismaelfari1996" ? "" :
                                <div key={index} className="col-md-6" data-aos="fade-right">
                                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{ "minHeight": "320px" }}>
                                        <div className="card-body">
                                            <div className="row" style={{ "minHeight": "150px" }}>
                                                <h3 className="card-title fw-bold fs-5"> {project.name}</h3>
                                                <p className="card-text text-color">{project.description}</p>
                                            </div>
                                            <hr/>
                                            <Languages url={project.languages_url} />
                            
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <a href={project.html_url} className="btn btn-outline-primary d-flex mx-auto align-items-center" target={'_blank'} rel="noopener noreferrer">
                                                        <i className="lab la-github icon-git"></i>  Repositorio</a>
                                                </div>
                                                <div className="col-md-6 space-mg">
                                                    <a href={project.svn_url + "/archive/master.zip"} className="btn btn-outline-primary d-flex mx-auto align-items-center text-center" target="_blank" rel="noopener noreferrer">
                                                        <i className="las la-cloud-download-alt icon-git"></i>  Clonar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    })
                }
            </div>
            <button className="btn d-flex mx-auto align-items-center border border-primary more-text"
            onClick={ev=>{
                showMore?
                setSlice(gitHubProjects.length):setSlice(5);
                setShowMore(showMore?false:true);
                if(showMore===false){
                    scrollToSeccion();
                }
            }}> {showMore?"Ver mas":"Ver menos"} <i class={showMore?"las la-angle-double-down fs-3":"las la-angle-double-up fs-3"}></i></button>
        </div>
    )
}

const Languages = ({ url }) => {
    const [lenguage, setLenguege] = new useState();
    const lenguageValue = [];
    let total = 0;
    useEffect(() => {
        axios.get(url)
            .then(value => setLenguege(value.data))
            .catch(error => { throw error })
    }, [])

    for (let i in lenguage) {
        lenguageValue.push(i);
        total += lenguage[i];
    }
    return (
        lenguageValue.length ?
            <div className="mb-2 text-color">Lenguajes: {
                lenguageValue.map(value => {
                    return (
                        <>
                            <strong><small>{value+": "}</small></strong>
                            <small>{Math.trunc(((lenguage[value] / total)) * 1000) / 10 + "%  "}</small>
                        </>
                    )
                })}
            </div> : <div className="mb-2 text-color">Lenguajes: <strong>No especificado</strong></div>
    )
}