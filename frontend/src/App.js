// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect} from 'react';
import axios from "axios";
// Pages Imports
import VideoPage from "./pages/VideoPage/VideoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  const [users, setUser] = useState([])
  return (
  <div>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><YouTubePage /></PrivateRoute> }/>
        <Route path="/:videoId" element={<VideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    
    
    <div>     
      <Footer />
    </div>
  </div>
  );
}

export default App;
