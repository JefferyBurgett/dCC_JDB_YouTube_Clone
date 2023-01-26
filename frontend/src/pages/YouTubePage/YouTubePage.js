import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./YouTubePage.css";
import axios from "axios";

const YouTubePage = () => {
    const [user, token] = useAuth();    
    const [searchTerm, setSearchTerm] = useState("curacao diving")
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
      <div>
        <div className="container">
          <h1> 
            <p className="welcomescreen"><span> Home Page for {user.username}!</span></p>
          </h1>
          <br/>
          <div className="searchbar">
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input className="form-control-lg"  type="text" value={searchTerm} placeholder='Search...' aria-label="Search" onChange={(event) => setSearchTerm(event.target.value)}></input>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
      </div>
        
           {videos &&
            videos.map((video) => (
              <div>
              <p key={video.id} className="mainvideo">
              </p>
              <Link to={`/${video.id.videoId}`}>
               <img src={video.snippet.thumbnails.medium.url}></img>
                <p className="videotitle"> {video.snippet.title}</p>
              </Link>
              <p className="videodescription"> {video.snippet.description}</p>
              <br/>
              <br/>
              </div>
             
            ))}
        </div>
      </div>
    );
  };
  
  export default YouTubePage;
