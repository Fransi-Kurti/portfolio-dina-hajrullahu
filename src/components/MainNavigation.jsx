import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LinkedInIcon from "../assets/linkedin.svg";
import FiverrIcon from "../assets/fiverr.svg";
import BehanceIcon from "../assets/behance.svg";
import hamburgerIcon from "../assets/bars-solid.svg";
import homeIcon from "../assets/house-solid.svg";
import { useDispatch } from "react-redux";
import { modalOpenerActions } from "../store/index";

export default function MainNavigation() {
  const dispatch = useDispatch();

  function toggleModal() {
    dispatch(modalOpenerActions.toggleModal());
  }

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.mobileHeader}>
        <img
          onClick={toggleModal}
          className={classes.mobileHeaderIcon}
          src={hamburgerIcon}
          alt="hamburger menu icon"
        />
      </div>
      <header className={classes.MainNavigation}>
        <nav>
          <ul className={classes.navigation}>
            <li>
              <NavLink
                to="/animations"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                ANIMATIONS.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                VIDEOS.
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/designs"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                DESIGNS.
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.icons}>
        <Link
            href="/"
            rel="noopener noreferrer"
          >
            <img src={homeIcon} alt="homeIcon" />
          </Link>
          <a
            href="https://www.linkedin.com/in/dina-hajrullahu-9b918a22b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.fiverr.com/dina_hajrullahu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FiverrIcon} alt="Fiverr" />
          </a>
          <a
            href="https://www.behance.net/dinahajrul3218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BehanceIcon} alt="Behance" />
          </a>
        </div>
      </header>
    </div>
  );
}
