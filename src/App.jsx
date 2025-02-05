import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}, Password: ${password}`);
  };

  const handleGoogleSignIn = () => {
    alert("Redirecting to Google Sign-In...");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <button onClick={handleGoogleSignIn} className="google-btn">Sign in with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
