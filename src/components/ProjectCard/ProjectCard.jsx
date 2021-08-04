import React from "react";
import Video from "../Video/Video";
import "./ProjectCard.scss";

const ProjectCard = (
  { title, subtitle, description, videoId, videoUrl, bcColor }
) => {
  return (
    <div className="ProjectCard" id="a" >

      <Video classname="ProjectCard__video" videoId={videoId} url={videoUrl}/>
      <div id="b" className="ProjectCard__text" style={{backgroundColor: bcColor}}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p><small>{description}</small></p>
      </div>

    </div>
  )
};

export default ProjectCard;
