// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import VideoPage from "./pages/VideoPage/VideoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";



function App() {
  return (
  <div>
    <div>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<PrivateRoute><YouTubePage /></PrivateRoute> }/>
        <Route path="/:videoId" element={<VideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchTerm" element={<SearchResultsPage />} />
      </Routes> 
      <Footer />
    </div>
  </div>
  );
}

export default App;
