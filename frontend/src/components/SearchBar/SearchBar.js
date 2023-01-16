import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${searchTerm}&key=AIzaSyDSgal95ALrOJIXespWblS5Z0hDKSKRL6Q`
        );
        console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }    
  
  function handleSubmit(event){
    event.preventDefault();
    fetchVideos();
  }  

  return (

    <div className="searchbar">
        <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input className="form-control-lg"  type="text" value={searchTerm} placeholder='Search...' aria-label="Search" onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
    </div>
  );
};

export default SearchBar;