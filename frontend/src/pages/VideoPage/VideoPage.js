import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./VideoPage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = () => {   
    const [user, token] = useAuth();
    const { videoId } = useParams();
    const [comment, setComments] = useState([]);
    const [videos, setVideos] = useState([]);
    // console.log(user);
    // console.log(token);
     
    
    
    return (
      <div className="video-page">
        <div className="video-container">
          <iframe
                  className="video"
                  // width="300"
                  // height="150"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  />      
        </div>
        <div className="relatedvideo-container">
          <RelatedVideos setVideos={setVideos} />
        </div>
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













                