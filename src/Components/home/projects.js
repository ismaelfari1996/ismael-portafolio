import axios from "axios";
import React, { useEffect, useState } from "react";
import Config from "../../config/config.json";
export default function Project() {
    const [gitHubProjects, setGitHubprojects] = new useState([]);
    useEffect(() => {
        axios.get(Config.git)
            .then(value => setGitHubprojects(value.data))
            .catch((error) => {
                console.log("ERROR");
            })
    }, []);
    console.log(gitHubProjects);
    return (
        <div className="container">
            <div>
                <h1>Portafolio</h1>
            </div>
            <div className="row">
                {
                    Object.values(gitHubProjects).map((project, index) => {
                        return (
                            <div class="col-md-6">
                                <div class="card shadow-lg p-3 mb-5 bg-white rounded card">
                                    <div class="card-body">
                                        <h5 class="card-title"> {project.name}</h5>
                                        <p class="card-text">{project.description}</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                        <a href={project.html_url} class="btn btn-outline-primary d-flex mx-auto align-items-center" target={'_blank'}>
                                            <i class="lab la-github"></i> Repositorio</a>
                                            </div>
                                            <div className="col-md-6">
                                        <a href={project.svn_url + "/archive/master.zip"} class="btn btn-outline-primary d-flex mx-auto align-items-center text-center" target="_blank">
                                            <i class="lab la-git-alt"></i> Clonar</a>
                                            </div>
                                        </div>

                                        <hr />
                                        <div class="pb-3">Lenguajes: <a class="badge badge-light card-link" href="#">PHP: 100 %</a>
                                        </div>
                                        <p class="card-text">
                                            <small class="text-muted">1 hour ago</small>
                                        </p>
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