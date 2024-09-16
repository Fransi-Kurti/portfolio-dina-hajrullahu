import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

import classes from "./Root.module.css";

export default function Root() {
  const modalIsOpen = useSelector((state) => state.modalIsOpen);

  // console.log("te shofimmmm", modalIsOpen);

  return (
    <div className={classes.myWorks}>
      <MainNavigation />
      <div className={classes.prove}>
        {!modalIsOpen ? <Outlet /> : <Modal />}
        
      </div>
    </div>
  );
}
