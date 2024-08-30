import { useEffect, useState } from 'react';
import {
  faNodeJs,
  faReact,
  faPhp,
  faMdb,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a passionate full-stack developer with a degree in Computer Science
            from the Islamic University of Lebanon and specialized training in the MERN stack through a Full Stack Bootcamp.
          </p>
          <p align="LEFT">
            With experience in both PHP/MySQL and modern web technologies, I thrive on solving complex problems and building innovative web applications. I'm eager to contribute to a dynamic IT company, where I can work on diverse projects, collaborate with like-minded professionals, and stay ahead of the curve in the ever-evolving tech landscape.
          </p>
          <p>
            Beyond coding, I'm a family-oriented individual with a love for sports, photography, and all things tech, continuously driven by curiosity and a desire to learn, particularly in the field of AI.
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faMdb} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNode} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPhp} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
