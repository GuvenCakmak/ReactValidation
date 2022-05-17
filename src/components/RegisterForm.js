import React, { useState } from "react";

function RegisterForm({ Register, error }) {
  //   detaljer för form rad 13
  const [register, setRegister] = useState({ name: "", email: "", password: "" });
  //   Hantera Submit
  const submitHandler = e => {
    e.preventDefault();
    localStorage.setItem('name', register.name)
    localStorage.setItem('email', register.email)
    localStorage.setItem('password', register.password)
    Register(register)
  }
  return (
    //   anropa submitHandler funktion
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={e => setRegister({ ...register, name: e.target.value })} value={register.name} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e => setRegister({ ...register, email: e.target.value })} value={register.email} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setRegister({ ...register, password: e.target.value })} value={register.password} />
        </div>
        <input type="submit" value="Register" />
      </div>
    </form>
  )
}

export default RegisterForm;
