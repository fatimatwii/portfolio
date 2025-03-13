import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
const skills = [
    ['HTML'],
    ['Tailwind CSS', 'CSS'],
    ['Bootstrap', 'jQuery', 'JavaScript'],
    ['PHP', 'React', 'Node.js'],
    ['Express', 'MongoDB'],
    ['SQL', 'C#', '.NET Core']
];

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timer);
      }, []);
    const [toggle, setToggle] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prevToggle => !prevToggle);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container skills-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}
                    />
                </h1>
                </div>
                <div className="skills-container">

                    {skills.map((row, rowIndex) => (
                        <div key={rowIndex} className="skills-row">
                            {row.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className={`skill-item ${toggle ? 'front' : 'back'}`}
                                    style={{
                                        opacity: (rowIndex + skillIndex) % 2 === (toggle ? 0 : 1) ? 1 : 0.2,
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;
