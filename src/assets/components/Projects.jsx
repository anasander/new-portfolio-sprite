import { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';

function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const popupRef = useRef(null);

    useEffect(() => {
        if (activeProject) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [activeProject]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setActiveProject(null);
            }
        }
        if (activeProject) document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [activeProject]);

    const currentProject = activeProject ? projectsData[activeProject] : null;

    return (
        <>
            <div className='bg-blue'>
                <div className="div-themed text-size-20">
                    <h3>Projetos</h3>
                </div>
            </div>
            <div className='project-list'>
                <div className="project-list-limit">
                    {Object.entries(projectsData).map(([key, project]) => (
                        <div 
                            key={key} 
                            className="project-item" 
                            onClick={() => setActiveProject(key)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={project.img} alt={project.title} />
                            <div className="project-text-content">
                                <h2 className="text-size-20">{project.title}</h2>
                                <p className="text-size-16">{project.sub}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span className="tag-item" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {currentProject && (
                <div className="ed-popup-overlay">
                    <div className="ed-popup popup-scrollable" ref={popupRef}> 
                        <button className="close-btn color-gray" onClick={() => setActiveProject(null)}>×</button>

                        <img src={currentProject.img} alt={currentProject.title} />
                        <h3>{currentProject.title}</h3>
                        
                        {currentProject.hasDetailedCase ? (
                            <div className="case-study-container text-size-16">
                                <p className="case-intro">{currentProject.caseStudy.introduction}</p>
                                
                                <h4>O Processo e Execução</h4>
                                <ul className="case-list">
                                    {currentProject.caseStudy.process.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.label}:</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>

                                <h4>Resultados e Impacto</h4>
                                <ul className="case-list">
                                    {currentProject.caseStudy.results.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.label}:</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-size-16">{currentProject.sub}</p>
                        )}

                        <div className="tags">
                            {currentProject.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>

                        {currentProject.link && (
                            <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="popup-link">
                                Acessar ↗
                            </a>
                        )}
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;