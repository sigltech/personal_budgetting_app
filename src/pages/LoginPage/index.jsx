import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import './style.css'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section className="login-page-section-container">
      <div className="login-page-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit" id="login-submit-btn">Login</button>
      </form>
      <p>Don't Have an account yet?</p>
      <a href="/register">Register here</a>
      </div>
    </section>
  );
};

export default LoginPage;
