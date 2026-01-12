import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
        id="filter"
      />
    </div>
  );
}
