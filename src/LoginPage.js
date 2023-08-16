import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      setError("");
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container mt-5 col-md-6">
        <h2 className="mb-4 text-center">Login Page</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
