import classes from "./Cart.module.css";

export default function Cart({ image, title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.cartItem}>
      <img src={image} alt={title} className={classes.cartItemImage} />
      <div className={classes.cartItemContent}>
        <h4 className={classes.cartItemTitle}>{title}</h4>
        <p className={classes.cartItemDescription}>{description}</p>
      </div>
    </a>
  );
}
