import styles from "./ProductImage.module.scss";

function ProductImage(props) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} {...props} />
    </div>
  );
}

export default ProductImage;
