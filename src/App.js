import './App.css';
import React, { useState } from "react";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
 
 //adminUser för att kolla att inloggning fungerar som den ska.
  const adminUser = {
    email: "test@test.com",
    password: "test123"
  }

const [user, setUser] = useState ({name:"", email: ""});
const [error, setError] = useState ("");
const [isSubmitted, setIsSubmitted] = useState(false);

function submitForm() {
  setIsSubmitted(true);
}
// funktion som kallas när man loggar in
const Login = details => {
  console.log(details);

if (details.email == adminUser.email && details.password == adminUser.password) {
  console.log("logged in")
setUser({
  name: details.name,
  email: details.email
});

} else {
  console.log("Something went wrong")
setError("Something went wrong")
}


}
// funktion som kallas när man loggar ut
const Logout = () => {
  setUser ({name:"", email: ""});
  console.log("Logout")
}




  return (
<>
<div className="App">
  {(user.email != "") ? (
<div className="welcome">
  <h2>Welcome, <span>{user.name}</span></h2>
  <button onClick={Logout}>Logout</button>
</div>
  ) : (
  <LoginForm Login={Login} error={error} />
)}
<RegisterForm submitForm={submitForm}/>
</div>
</>
);
}
export default App;
