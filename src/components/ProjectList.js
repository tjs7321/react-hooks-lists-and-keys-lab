import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projArray = projects.map((project) => {
    return (
      <div key={project.id} className="project-item">
        <h3>{project.name}</h3>
        <p>{project.about}</p>
      </div>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projArray}</div>
    </div>
  );
}

export default ProjectList;
