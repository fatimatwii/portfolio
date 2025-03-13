import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  const projects = [
    {
      title: "DaoudHarb.com",
      description: "A podcast website for Dr. Daoud Harb focused on education. My first live website that launched my freelance journey.",
      tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      link: "https://daoudharb.com",
    },
    {
      title: "Special Needs Marketplace",
      description: "A platform that connects people to buy services from individuals with special needs, empowering their independence. Built during my ESA Full-Stack Bootcamp.",
      tech: "MERN Stack",
    },
    {
      title: "Medical Center Booking System",
      description: "Developed the doctor’s side, managing availability, appointments, and patient feedback.",
      tech: "PHP, MySQL, AJAX, Bootstrap",
    },
    {
      title: "First Huge PHP Project",
      description: "A major PHP project where I learned a lot about writing better code and structuring projects.",
      tech: "PHP, MySQL",
    },
  ];
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          
        </div>
        <div className="projects-container">
  
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className='hh'>{project.title}</h3>
            <p className='techh'>{project.description}</p>
            <p className="tech">{project.tech}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">Visit Website</a>
            ) : project.video ? (
              <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-btn">Watch Video</a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Projects;
