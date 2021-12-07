import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { firebase } from "../src/firebase";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  if (isUserSignedIn) {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <h2>sign in</h2>
      </div>
    );
  }
}

export default App;
