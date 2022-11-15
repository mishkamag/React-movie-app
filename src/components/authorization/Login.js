import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label thmlfor="date">Birth Date </label>
        <input type="date" id="date" name="date" />

        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
