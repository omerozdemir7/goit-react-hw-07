import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name">Name</label>
          <Field className={styles.field} type="text" name="name" id="name" />
          <ErrorMessage
            className={styles.error}
            name="name"
            component="span"
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="number">Number</label>
          <Field
            className={styles.field}
            type="text"
            name="number"
            id="number"
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
