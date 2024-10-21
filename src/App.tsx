import Nav from "./components/Nav";
import ProfileImage from "./components/ProfileImage";
import "./App.css";
import Button from "./components/Button";
import "./styles/Button.css";
import "./styles/Shadows.css";

function App() {
  return (
    <div>
      <Nav />
      <section id="profile">
        <div className="profile__info-container">
          <div className="profile__text-container">
            <p className="profile__text-greeting">I am,</p>
            <h1 className="profile__text-name">Joseph Keelagher</h1>
            <p className="profile__text-title">Software Engineer</p>
          </div>
          <div className="button-container">
            <Button
              hoverType="outline"
              image="src\assets\logo-github.svg"
              text="GitHub"
              link="https://github.com/josephkeelagher"
            />
            <Button
              hoverType="outline"
              image="src\assets\logo-linkedin.svg"
              text="LinkedIn"
              style="icon-sm"
              link="https://www.linkedin.com/in/joseph-keelagher-b67170292/"
            />
            <Button
              hoverType="fill"
              image="src\assets\document.svg"
              text="Resume"
              style="icon-sm"
              link="src\assets\Joseph_Keelagher_Graduate_Resume.pdf"
            />
          </div>
        </div>
        <div className="profile__pic-container">
          <ProfileImage image="src\assets\profile-image.jpeg"/>
        </div>
      </section>
      <section id="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__button-container drop-shadow">
          <Button
            hoverType="outline"
            image="src\assets\school.svg"
            text="Education"
            style="icon-sm"
            link=""
          />
          <Button
            hoverType="outline"
            image="src\assets\football.svg"
            text="Hobbies"
            link=""
          />
          <Button
            hoverType="outline"
            image="src\assets\rocket.svg"
            text="Goals"
            style="icon-sm"
            link=""
          />
        </div>
        <div className="about__text-container"></div>
      </section>
    </div>
  );
}

export default App;
