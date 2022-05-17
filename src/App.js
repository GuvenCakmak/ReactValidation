import './App.css';
import React, { useState } from "react";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();
  //adminUser för att kolla att inloggning fungerar som den ska.
  const adminUser = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password')
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  // funktion som kallas när man loggar in
  const Login = details => {
    console.log(details);
    console.log(adminUser)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("logged in")
      navigate("/signedin");

    } else {
      console.log("Something went wrong")
      setError("Something went wrong")
    }
  }

  const Register = details => {
  }
  // funktion som kallas när man loggar ut
  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout")
  }




  return (
    <>
      <div className="App">
        {(user.email != "") ? (
          <div className="welcome">
            {console.log(user)}
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <div>
            <LoginForm Login={Login} error={error} />
            <RegisterForm Register={Register}/>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
