import Cart from "../components/Cart";

import { designData } from "../assets/Designs/DesignData";

import classes from "./Designs.module.css";

export default function Designs() {
  return (
    <>
      <div className={classes.designs}>
      {designData.map((design) => (
            <Cart key={design.id}
              title={design.title}
              description={design.description}
              image={design.image}
              link={design.link}
            />
        ))}
      </div>
    </>
  );
}
