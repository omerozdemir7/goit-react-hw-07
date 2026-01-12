import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.text}>
          <span className={styles.icon}>👤</span> {name}
        </p>
        <p className={styles.text}>
          <span className={styles.icon}>📞</span> {number}
        </p>
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
