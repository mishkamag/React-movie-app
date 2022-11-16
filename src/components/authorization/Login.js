import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    date: "",
  };

  const onSubmit = (values) => {
    navigate("/");
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 6) {
      errors.name = "Name cannot be less than 6";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.date) {
      errors.date = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors);

  return (
    <Fragment>
      <div className={classes.site}>ADJARANET</div>
      <section className={classes.login}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.name}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={classes.error}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className={classes.email}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={classes.date}>
            <label thmlfor="date">Birth Date </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className={classes.error}>{formik.errors.date}</div>
            ) : null}
          </div>

          <button type="submit" className={classes.button}>
            Log In
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
