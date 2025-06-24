import { useState } from 'react';
import RevealButton from './RevealButton';
import "../styles/About.css";
import ProfileImage from './ProfileImage';
import "../App.css";

const About = () => {
    
    type SectionKey = keyof typeof content;
    const [activeSection, setActiveSection] = useState<SectionKey>('default');

    const content = {
        default: (
            <p>Please click on a section above to learn more about me!</p>
        ),
        Education: 
        (<>
            <div className="profile__pic-container">
                <ProfileImage image="/assets/mid-shot.jpeg"/>
            </div>
            <div className="about__text">
                <p>
                    (B.Sc.) Bachelor of Science,
                </p>
                <p>
                    Major in Computing & Software Systems
                </p>
                <p>
                    The University of Melbourne, Class of 2024
                </p>
            </div>
        </>),
        Hobbies: 
        (<>
            <div className="profile__pic-container">
                <ProfileImage image="/assets/beauyphoto1.jpg"/>
            </div>
            <div className="about__text">
                <p>
                    I've played Soccer for 12+ years,
                </p>
                <p>
                    I love watching and producing films, 
                </p>
                <p>
                    I'm passionate about fitness & strength training.
                </p>
            </div>
        </>),
        Goals:
        (<>
            <div className="profile__pic-container">
            <ProfileImage image="/assets/goldengatebridge.jpg" />
            </div>
            <div className="about__text">
            <p>
                I'm building high-impact software that solves real-world problems.
            </p>
            <p>
                Currently sharpening my engineering and leadership skills at Exco Partners.
            </p>
            <p>
                On a mission to craft web & mobile applications that people want to use.
            </p>
</div>
        </>),
    };

  return (
    <section id="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__button-container drop-shadow">
            <RevealButton
            hoverType="outline"
            image="/assets/school.svg"
            text="Education"
            style="icon-sm"
            onClick={() => setActiveSection('Education')}
            />
            <RevealButton
            hoverType="outline"
            image="/assets/football.svg"
            text="Hobbies"
            onClick={() => setActiveSection('Hobbies')}
            />
            <RevealButton
            hoverType="outline"
            image="/assets/rocket.svg"
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