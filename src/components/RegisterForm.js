
import React, { useState } from "react";
import validateInfo from "./ValidateInfo";
import useForm from './useForm'


  const RegisterForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors} = useForm(
      submitForm,
      validateInfo
    );

    return (
//   anropa submitHandler funktion
  <form onSubmit={handleSubmit}>
<div className="form-inner">
<h2>Register</h2>

<div className="form-group"> 
<input placeholder="Name" type="text" name="name" id="name" value={values.username} onChange={handleChange} />
</div>

<div className="form-group">
<input placeholder="Email" type="email" name="email" id="email" value={values.email} onChange={handleChange} />
</div>
 
 <div className="form-group">
<input placeholder="Password" type="password" name="password" id="password" value={values.password} onChange={handleChange} />
 </div>
 
 <div className="form-group">
 
<input placeholder="Confirm Password" type="password" name="password_confirmation" id="password" value={values.password2} onChange={handleChange} />
 </div>

<input type="submit" value="REGISTER" />
    </div>
  </form>
)}

export default RegisterForm;
