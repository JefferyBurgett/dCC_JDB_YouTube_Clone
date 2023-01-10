import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./YouTubePage.css";
import {DATA} from "../../localData";

import axios from "axios";

const YouTubePage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const [user, token] = useAuth();
    const [comment, setComments] = useState([]);
    // console.log(user);
    // console.log(token);
    const [searchTerm, setSearchTerm] = useState("curacao diving")
    const [videos, setVideos] = useState([]);


    useEffect(() => {
      fetchVideos()
    }, [])

    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${searchTerm}&key=AIzaSyAKepytxUmWxBY5Q5bdSatiMDLGhFI9o1I`
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
          <h1>Home Page for {user.username}!</h1>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input className="form-control-lg"  type="text" value={searchTerm} placeholder='Search...' aria-label="Search" onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          {videos &&
            videos.map((video) => (
              <div>

              <p key={video.id}>
                 {video.snippet.title}
              </p>
              <Link to={`/${video.id.videoId}`}>
               <img src={video.snippet.thumbnails.medium.url}></img>
              </Link>
             
              <p>{video.snippet.description}</p>
              <br/>
              <br/>
              </div>
             
            ))}
        </div>
            {/* // );
            // }; */}
        
      </div>
    );
  };
  
  export default YouTubePage;









  // <div className="container-fluid">   
  //         <div className="row">
  //           <div className="col-sm-8">
              
  //           </div>
  //           <div className="col-sm-4">
  //             <iframe
  //               width="300"
  //               height="150"
  //               src={`https://jsonplaceholder.typicode.com/photos/albumid/1/id/2`}
  //               frameBorder="0"
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               title="Embedded youtube"
  //               />
  //             <iframe
  //               width="300"
  //               height="150"
  //               src={`https://jsonplaceholder.typicode.com/photos/albumid/1/id/3`}
  //               frameBorder="0"
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               title="Embedded youtube"
  //               />
  //             <iframe
  //               width="300"
  //               height="150"
  //               src={`https://jsonplaceholder.typicode.com/photos/albumid/1/id/4`}
  //               frameBorder="0"
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               title="Embedded youtube"
  //               />
  //           </div>        
  //         </div>   
  //       </div>