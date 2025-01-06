// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import FacultyRegister from "./pages/FacultyRegister";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Faculty from "./pages/Faculty";
import Users from "./pages/Users";
import ConsultationTable from "./pages/ConsultationTable";

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/register" element={<FacultyRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faculty" element={<Faculty/>}/>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/consultation" element={<ConsultationTable/>} />
            <Route path="/users" element={<Users/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
