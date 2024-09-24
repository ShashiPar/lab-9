import React, { useState } from "react";
import "./App.css";
import CryptoImages from "./components/CryptoImage";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Callback function for successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Gato!</h1>

      {isLoggedIn ? (
        <CryptoImages />
      ) : (
        <Login onLogin={handleLogin} /> // Pass down the login handler to Login component
      )}
    </div>
  );
}

export default App;
