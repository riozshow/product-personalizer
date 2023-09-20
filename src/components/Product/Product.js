import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";
import { useState, useEffect } from "react";

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(`
      Summary
      =============
      Name: ${name}
      Price: ${totalPrice}
      Size: ${selectedSize.name.toUpperCase()}
      Color: ${selectedColor}
    `);
  };

  useEffect(() => {
    if (selectedSize) {
      setTotalPrice(basePrice + selectedSize.additionalPrice);
    }
  }, [selectedSize]);

  return (
    <article className={styles.product}>
      <ProductImage
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`}
      />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>
        <ProductForm
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          colors={colors}
          sizes={sizes}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
