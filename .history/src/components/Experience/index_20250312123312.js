import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import './timeline.scss'; // New styles for the timeline

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      date: "March 2024 – Present",
      title: "IT Manager at Ajyal High School",
      description: `
      Since March 2024, I have been serving as the IT Manager at Ajyal High School, where I oversee the school’s technology infrastructure, ensuring secure, efficient, and modern IT systems that support both education and administration. My role involves managing network security, data protection, and Google Workspace, as well as implementing IT policies to enhance system performance and cybersecurity. I provide technical support and troubleshooting for hardware, software, and connectivity issues while leading digital transformation initiatives to integrate e-learning platforms and modern technology into the classroom. `,


    },
    {
      date: "May 2024 – Nov. 2024",
      title: "Full Stack Bootcamp at ESA Coding Lab",
      description: `
        I finished a full-stack coding bootcamp at ESA Coding Lab, where I learned various web development skills, including soft skills, web fundamentals, project management methodologies, Unified Modeling Language (UML), front-end development (HTML, CSS, JavaScript), back-end development (PHP, SQL), and full-stack development using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
      `,
    },
    {
      date: "July 2022 – Sep. 2022",
      title: "Internship at Code Wave company",
      description: `
        During my internship at codewave,I had the opportunity to work on exciting projects such as a "New Contact Application" developed as a Windows app using C# and a "Training Management System" built with ASP.NET using C#. 
Working closely with experienced developers, I contributed to various stages of the development process, from design to implementation. This experience not only expanded my technical skills but also provided me with a deeper understanding of the software development lifecycle in a professional setting.
      `,


    },
  ];

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
        </div>
        <div className="timeline-container">
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="date">{experiences[0].date}</span>
              <h3>{experiences[0].title}</h3>
              <p className="descriptions">{experiences[0].description}</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="date">{experiences[1].date}</span>
              <h3>{experiences[1].title}</h3>
              <p className="descriptions">{experiences[1].description}</p>
            </div>
            <div className="timeline-content">
              <span className="date">{experiences[2].date}</span>
              <h3>{experiences[2].title}</h3>
              <p className="descriptions">{experiences[2].description}</p>
            </div>
          </div>
        </div>



      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experience;
