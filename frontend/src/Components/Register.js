import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://backend-i9tl.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, gmail, password }),
      });

      if (response.ok) {
        // Clear the form fields after successful submission
        setUsername("");
        setGmail("");
        setPassword("");
        alert("Registration successfull");
      } else {
        // Optionally handle non-OK responses here
        console.error("Failed to add user.");
      }
    } catch (error) {
      // Optionally handle network or other errors here
      console.error("Failed to add user.", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />

        <input
          type="email"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
