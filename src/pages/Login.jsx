import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple worker login for now
    if (username === "worker" && password === "worker@1234") {
      localStorage.setItem("workerLoggedIn", "true");

      // After login → Welcome page
      navigate("/welcome");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <img
            src="/images/logo.png"
            alt="CivicConnect"
          />
        </div>

        <h1>Worker Login</h1>

        <p className="login-subtitle">
          Login to access your CivicConnect Worker Portal
        </p>

        <form onSubmit={handleLogin}>

          <div className="login-field">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label>Password</label>

            <div className="password-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;