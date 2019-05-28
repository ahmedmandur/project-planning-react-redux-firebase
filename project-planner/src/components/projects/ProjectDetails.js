import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            unde atque eveniet voluptatibus labore! Ea quaerat excepturi,
            dolorum non corporis at molestiae veritatis quos cupiditate dolores
            illo doloribus dolore? Aliquid?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ahmed Mandour</div>
          <div>10/02/2019 01:10 PM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
