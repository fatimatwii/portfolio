import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 't', 'i', 'm', 'a'];
  const jobArray = [
    'W',
    'e',
    'l',
    'c',
    'o',
    'm',
    'e',
    ' ',
    't',
    'o',
    ' ',
    'M',
    'y',
    ' ',
    'D',
    'i',
    'g',
    'i',
    't',
    'a',
    'l',
    ' ',
    'P',
    'l',
    'a',
    'y',
    'g',
    'r',
    'o',
    'u',
    'n',
    'd',
    '!',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={3}
            />
          </h1>
          
  
          <div className="button-container">
            <Link to="/about" className="flat-button">
              ABOUT ME
            </Link>
            <Link to="/experience" className="flat-button">
              MY EXPERIENCE
            </Link>
            <Link to="/projects" className="flat-button">
              MY PROJECTS
            </Link>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;
