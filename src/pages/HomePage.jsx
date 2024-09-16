import { NavLink } from "react-router-dom";
import classes from "./HomePage.module.css";

import eyeSvg from "../assets/syri_imadh.svg";
import About from "../components/About";
import mainLogo from '../assets/mainLogo.png'
import { useRef } from "react";

export default function HomePage() {
  const dialog = useRef();

  function handleOpenAbout() {
    dialog.current.open();
    dialog.current.onTop();
  }

  return (
    <>
      <About ref={dialog} />
      <div className={classes.homePage}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img className={classes.portfolio} src={mainLogo} alt='name and signature-dina-hajrullahu'/>
          </div>
          <nav className={classes.navigation}>
            <ul>
              <li>
                <NavLink onClick={handleOpenAbout}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://www.linkedin.com/in/dina-hajrullahu-9b918a22b/"
                >
                  LINKEDIN
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://www.behance.net/dinahajrul3218"
                >
                  BEHANCE
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://www.fiverr.com/dina_hajrullahu"
                >
                  FIVER
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.eye}>
          <img src={eyeSvg} />
        </div>
        <div className={classes.footer}>
          <div className={classes.mainNavigation}>
            <button>
              <NavLink to="/animations">ANIMATIONS.</NavLink>
            </button>
            <button>
              <NavLink to="/videos">VIDEOS.</NavLink>
            </button>
            <button>
              <NavLink to="/designs">DESIGNS.</NavLink>
            </button>
          </div>
          <div className={classes.contact}>
            <p>
              <span></span>
            </p>
            <p>dina.hajrullahu@hotmail.com</p>
            <p>+383 49 624 413</p>
            <p>website by Fransi Kurti</p>
          </div>
        </div>
      </div>
    </>
  );
}
