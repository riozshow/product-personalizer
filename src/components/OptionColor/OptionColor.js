import styles from "../ProductForm/ProductForm.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

function OptionColor({ colors, setSelectedColor, selectedColor }) {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => (
          <li key={color}>
            <button
              onClick={() => setSelectedColor(color)}
              type="button"
              className={clsx(
                styles[`color${color[0].toUpperCase()}${color.slice(1)}`],
                selectedColor === color && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};

export default OptionColor;
