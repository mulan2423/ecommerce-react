<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
    </div>
=======
import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
>>>>>>> remotes/origin/addy
  );
}

export default App;
