import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function ProductForm(props) {
  const {
    sizes,
    colors,
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize,
    handleAddToCart,
  } = props;

  return (
    <form onSubmit={handleAddToCart}>
      <OptionColor
        setSelectedColor={setSelectedColor}
        colors={colors}
        selectedColor={selectedColor}
      />
      <OptionSize
        setSelectedSize={setSelectedSize}
        sizes={sizes}
        selectedSize={selectedSize}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedSize: PropTypes.object.isRequired,
  setSelectedSize: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;
