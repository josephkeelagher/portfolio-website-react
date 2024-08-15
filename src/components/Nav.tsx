import { useEffect, useState } from "react";
import "../styles/Nav.css";
import "../styles/Shadows.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navHeight = document.querySelector("nav")?.offsetHeight || 0;

    const observerOptions = {
      root: null, // viewport
      rootMargin: `-${navHeight}px 0px 0px 0px`, // offset by the height of the nav
      threshold: 0.5, // 50% of the section must be in view to trigger the observer
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function handleNavClick(Nav: string) {
    setActiveNav(Nav);
    const section = document.getElementById(Nav);
    if (section) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - navHeight, behavior: "smooth" });
    }
  }

  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-white sticky-top drop-shadow navbar-expand-lg border-bottom"
      >
        <div className="container-md">
          <a className="navbar-brand fw- fs-2" href="#">
            Joseph Keelagher
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={
                    "fs-3 hover-underline nav-link " +
                    (activeNav === "about" ? "active" : "")
                  }
                  href="#"
                  aria-current="page"
                  onClick={() => handleNavClick("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "fs-3 hover-underline nav-link " +
                    (activeNav === "experience" ? "active" : "")
                  }
                  href="#"
                  onClick={() => handleNavClick("experience")}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "fs-3 hover-underline nav-link " +
                    (activeNav === "projects" ? "active" : "")
                  }
                  href="#"
                  onClick={() => handleNavClick("projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "fs-3 hover-underline nav-link " +
                    (activeNav === "contact" ? "active" : "")
                  }
                  onClick={() => handleNavClick("contact")}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
