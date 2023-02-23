import axios from "axios";
import React, { useEffect, useState } from "react";
import Config from "../../config/config.json";
export default function Project() {
    const [gitHubProjects, setGitHubprojects] = new useState([]);
    //Consume la API de Github
    useEffect(() => {
        axios.get(Config.git) //La url se encuentra configurado en config.json
            .then(value => setGitHubprojects(value.data))
            .catch((error) => {
                console.log("ERROR");
            })
    }, []);

    return (
        <div className="container">
            <div>
                <h1>Portafolio</h1>
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
                                            <h5 className="card-title"> {project.name}</h5>
                                            <p className="card-text">{project.description}</p>
                                        </div>
                                        <hr/>
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <a href={project.url} className="btn btn-outline-primary d-flex mx-auto align-items-center" target={'_blank'}>
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
                    Object.values(gitHubProjects).map((project, index) => {
                        return (
                            project.name === "ismaelfari1996" ? "" :
                                <div key={index} className="col-md-6" data-aos="fade-right">
                                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{ "minHeight": "320px" }}>
                                        <div className="card-body">
                                            <div className="row" style={{ "minHeight": "150px" }}>
                                                <h5 className="card-title"> {project.name}</h5>
                                                <p className="card-text">{project.description}</p>
                                            </div>
                                            <hr/>
                                            <Languages url={project.languages_url} />
                                            
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <a href={project.html_url} className="btn btn-outline-primary d-flex mx-auto align-items-center" target={'_blank'}>
                                                        <i className="lab la-github icon-git"></i>  Repositorio</a>
                                                </div>
                                                <div className="col-md-6 space-mg">
                                                    <a href={project.svn_url + "/archive/master.zip"} className="btn btn-outline-primary d-flex mx-auto align-items-center text-center" target="_blank">
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
            <div className="mb-2">Lenguajes: {
                lenguageValue.map(value => {
                    return (
                        <>
                            <strong><small>{value+": "}</small></strong>
                            <small>{Math.trunc(((lenguage[value] / total)) * 1000) / 10 + "%  "}</small>
                        </>
                    )
                })}
            </div> : ""
    )
}