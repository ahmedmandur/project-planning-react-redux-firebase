import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary
        title="Project title"
        author="Ahmed"
        publishDate="01/10/2019 10:24 PM"
      />
      <ProjectSummary
        title="Project title"
        author="Ahmed"
        publishDate="01/10/2019 10:24 PM"
      />
      <ProjectSummary
        title="Project title"
        author="Ahmed"
        publishDate="01/10/2019 10:24 PM"
      />
    </div>
  );
};

export default ProjectList;
