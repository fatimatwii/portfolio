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
            Hi, I'm Fatima — a passionate full-stack developer with a Computer Science degree from the Islamic University of Lebanon. I specialize in the MERN stack, having honed my skills through an intensive Full Stack Bootcamp. I’m also currently expanding my expertise with training in .NET Core to diversify my abilities and stay adaptable in the fast-evolving tech landscape.  </p>
          <p align="LEFT">
            With hands-on experience in modern web technologies, I enjoy tackling complex problems and creating dynamic, user-friendly web applications. </p>
          <p>
            I’m always open to working on exciting projects using the MERN stack, whether you’re a doctor, nutritionist, school, or any business looking to build or enhance your website.
          </p>
          <p>
            I believe in the power of technology to make a real difference, and I’m constantly inspired by the potential to learn, grow, and innovate.
          </p>
        </div>
        <div className='myImage'></div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
