import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Fragment>
      <div className={classes.site}>ADJARANET</div>
      <section className={classes.login}>
        <form onSubmit={loginSubmitHandler}>
          <div className={classes.name}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={classes.email}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={classes.date}>
            <label thmlfor="date">Birth Date </label>
            <input type="date" id="date" name="date" />
          </div>

          <button className={classes.button}>Log In</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
