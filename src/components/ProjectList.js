import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projArray = projects.map((project) => {
    return (ProjectItem(project))
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projArray}</div>
    </div>
  );
}

export default ProjectList;
