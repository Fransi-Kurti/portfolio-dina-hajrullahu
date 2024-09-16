import { forwardRef, useRef, useImperativeHandle } from "react";
import classes from "./About.module.css";

const About = forwardRef(function About(props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      onTop() {
        dialog.current.scrollTop = 0;
      }
    };
  });
  return (
    <dialog className={classes.dialog} ref={dialog}>
      <p>
        Welcome to my portfolio! I’m Dina, a passionate Motion Designer, Graphic
        Designer, and Video Editor with over five years of experience in the
        multimedia field. My journey began at Marubi Academy of Film and
        Multimedia in Tirana, where I earned my Bachelor’s Degree in Film
        Directing. This foundation in storytelling and visual creativity was
        further enriched by my Master’s Degree in Applied Design from POLIS
        University of Tirana. Throughout my career, I’ve had the pleasure of
        collaborating with a variety of studios and organizations to bring
        animations and video explainers to life. My work blends creativity with
        technical expertise, aiming to create compelling visuals that engage and
        inform. Whether it’s crafting dynamic motion graphics, designing
        striking visuals, or editing captivating videos, I’m dedicated to
        delivering high-quality, innovative solutions that meet the unique needs
        of each project. Thank you for visiting my site. Feel free to explore my
        work and reach out if you’d like to collaborate or learn more about what
        I do!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default About;
