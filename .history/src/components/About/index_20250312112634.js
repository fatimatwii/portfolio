import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import myImage from '../../assets/images/IMG_20240428_095700.jpg'; // Adjust the path as necessary

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
    Hi, I'm <span className="bold-text">Fatima</span> — a passionate 
    <span className="bold-text"> IT Manager </span> and 
    <span className="bold-text"> Full-Stack Developer </span> with a 
    <span className="bold-text"> Computer Science </span> degree from 
    the <span className="bold-text"> Islamic University of Lebanon</span>. 
    I currently serve as the <span className="bold-text"> IT Manager </span> 
    at <span className="bold-text"> Ajyal High School</span>, where I oversee 
    technology solutions to enhance the school's digital infrastructure.
  </p>
  <p align="LEFT">
    Alongside my managerial role, I specialize in the 
    <span className="bold-text"> MERN stack</span>, having honed my skills through
    an intensive <span className="bold-text"> Full Stack Bootcamp</span>. 
    I leverage my expertise to build dynamic, user-friendly 
    web applications that solve real-world problems.
  </p>
  <p>
    With hands-on experience in <span className="bold-text"> modern web technologies</span>, 
    I enjoy developing <span className="bold-text"> custom websites and platforms</span> 
    for businesses, schools, and professionals—including 
    <span className="bold-text"> doctors, nutritionists</span>, and more.
  </p>
  <p>
    I believe in the power of <span className="bold-text"> technology </span> 
    to transform education and businesses, and I’m always eager to take on 
    new challenges, whether it's <span className="bold-text"> optimizing IT systems </span> 
    or crafting <span className="bold-text"> innovative web solutions</span>.
  </p>
</div>

        <div className='myImage'></div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
