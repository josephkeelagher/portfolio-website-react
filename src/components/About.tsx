import React from 'react';
import { useState } from 'react';
import Button from './Button';
import RevealButton from './RevealButton';

const About = () => {
    
    type SectionKey = keyof typeof content;
    const [activeSection, setActiveSection] = useState<SectionKey>('default');

    const content = {
        default: (
            <p>Please click on a selection above to learn more about me!</p>
        ),
        Education: 
        (<>
            <p>
                (B.Sc.) Bachelor of Science - Computing & Software Systems 
            </p>
            <p>
                The University of Melbourne, Class of 2024
            </p>
        </>),
        Hobbies: 
        (<>
            <p>
                I've played Soccer for 12+ years,
            </p>
            <p>
                I love watching and producing films, 
            </p>
            <p>
                and I'm passionate about fitness and strength training.
            </p>
        </>),
        Goals:
        (<>
            <p>
                I'm passionate about pursuing a career in Software and Computer Science,
            </p>
            <p>
                I plan to further my skills in areas such as Engineering and Leadership throughout my career.
            </p>
        </>),
    };

  return (
    <section id="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__button-container drop-shadow">
            <RevealButton
            hoverType="outline"
            image="src/assets/school.svg"
            text="Education"
            style="icon-sm"
            onClick={() => setActiveSection('Education')}
            />
            <RevealButton
            hoverType="outline"
            image="src/assets/football.svg"
            text="Hobbies"
            onClick={() => setActiveSection('Hobbies')}
            />
            <RevealButton
            hoverType="outline"
            image="src/assets/rocket.svg"
            text="Goals"
            style="icon-sm"
            onClick={() => setActiveSection('Goals')}/>
        </div>
        <div className="about__content">
            {content[activeSection]}
        </div>
    </section>
  )
}

export default About