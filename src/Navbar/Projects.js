import React from 'react'
import ProjectView from './ProjectView'

const PROJECTS = [
    {
        name: "Social Links",
        link: "https://noahfarinas.github.io/",
        type: "HTML & CSS",
        img: "./photo-gallery/photos/social.png",
    },
    {
        name: "Rad Power Bikes",
        link: "https://noahfarinas.github.io/top-rad-bikes/",
        type: "ReactJS",
        img: "./photo-gallery/photos/rad.png",
    },
    {
        name: "Stretching Search",
        link: "https://noahfarinas.github.io/stretching/",
        type: "ReactJS",
        img: "./photo-gallery/photos/stretch.png",
    },
    {
        name: "Resume",
        link: "https://noahfarinas.github.io/noahfarinas-react-resume/",
        type: "ReactJS",
        img: "./photo-gallery/photos/resume.png",
    },
    
];

const Projects = () => {
  return (
    <ProjectView view={PROJECTS} />
  )
}

export default Projects