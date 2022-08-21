import { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import './style.css'

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <section className="register-page-section-container">
      <div className="register-page-container">
          <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-containers">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-containers">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-containers">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              onChange={e => setPassword2(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
          </div>
          <button id="register-submit-btn">Register</button>
        </form>
        <p>Have an account already?</p>
        <a href="/login">Login here</a>
      </div>
    </section>
  );
}

export default Register;
