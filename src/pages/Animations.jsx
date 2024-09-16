import Cart from "../components/Cart";
import { AnimationsData } from "../assets/Animations/AnimationsData";


import classes from "./Animations.module.css";

export default function Animations() {

  return (
    <>
      <div className={classes.animations}>
        {AnimationsData.map((animation) => (
            <Cart key={animation.id}
              title={animation.title}
              description={animation.description}
              image={animation.image}
              link={animation.link}
            />
        ))}
      </div>
    </>
  );
}
