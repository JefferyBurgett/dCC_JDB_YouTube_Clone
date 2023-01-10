import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';

import axios from "axios";

const VideoPage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const [user, token] = useAuth();
    const { videoId } = useParams();
    const [comment, setComments] = useState([]);
    // console.log(user);
    // console.log(token);
  


   
    
    
    return (
      <div>
        <iframe
                width="300"
                height="150"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
      </div>
    );
  };
  
  export default VideoPage;























// useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/comment/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setComments(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchComments();
//   }, [token]);













                