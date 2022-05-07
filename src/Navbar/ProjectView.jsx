import React from 'react'
import { Link } from "react-router-dom"




const ProjectView = (props) => {
    const { view } = props;
  return (
    <div className="page-container">
    <div className="project-view">
      <>
        {view
          .map((item) => (
            <ul>
              <>
                <img src={item.img} alt="test" />
               <h3>{item.name}</h3>
               <li>{item.type}</li>
               <a href={item.link} target= "_blank">View Project</a>
              </>
            </ul>
          ))}
      </>
    </div>
  </div>
  )
}

export default ProjectView