import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Create a separate CSS file for styling if needed

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Logging in with:", email, password);

    // Navigate to the dashboard after successful login
    navigate("/dashboard"); // Assuming "/dashboard" is the correct route
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In to Cloverse</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p>
          Don't have an account? <span onClick={() => navigate("/signup")} className="link">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
