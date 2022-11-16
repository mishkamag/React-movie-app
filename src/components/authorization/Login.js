import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
    },
    onSubmit: (values) => {
      navigate("/");
      console.log(values);
    },
  });

  // const loginSubmitHandler = (event) => {
  //   event.preventDefault();
  //   navigate("/");
  // };

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
              value={formik.values.name}
            />
          </div>

          <div className={classes.email}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className={classes.date}>
            <label thmlfor="date">Birth Date </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
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
