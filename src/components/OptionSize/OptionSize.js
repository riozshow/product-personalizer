import styles from "../ProductForm/ProductForm.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

function OptionSize({ sizes, selectedSize, setSelectedSize }) {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={size.name}>
            <button
              type="button"
              className={clsx(size === selectedSize && styles.active)}
              onClick={() => setSelectedSize(size)}
            >
              {size.name.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedSize: PropTypes.object.isRequired,
  setSelectedSize: PropTypes.func.isRequired,
};

export default OptionSize;
