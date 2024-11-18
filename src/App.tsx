import Nav from "./components/Nav";
import ProfileImage from "./components/ProfileImage";
import "./App.css";
import Button from "./components/Button";
import "./styles/Button.css";
import "./styles/Shadows.css";
import About from "./components/About";

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
      <About />
    </div>
  );
}

export default App;
