import { NavLink } from "react-router-dom";
import classes from "./Modal.module.css";

import LinkedInIcon from "../assets/linkedin.svg";
import FiverrIcon from "../assets/fiverr.svg";
import BehanceIcon from "../assets/behance.svg";
import { useDispatch } from "react-redux";
import { modalOpenerActions } from "../store/index";

export default function Modal() {
  const dispatch = useDispatch();

  function toggleModal() {
    dispatch(modalOpenerActions.toggleModal());
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modalNavigation}>
        <ul>
          <li>
            <NavLink
              onClick={toggleModal}
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
              onClick={toggleModal}
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
              onClick={toggleModal}
              to="/designs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              DESIGNS.
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleModal}
              to="/"
            >
              HOME.
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.modalIcons}>
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
    </div>
  );
}
