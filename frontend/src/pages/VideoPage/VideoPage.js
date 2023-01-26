import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./VideoPage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import Comment from "../../components/Comments/Comments";

const VideoPage = () => {   
    const [user, token] = useAuth();
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const { comment } = useParams();  
    
    
    return (
      <div className="video-page">
        <div className="container-flex">
          <div className="row row-col-8">
            <div className="col">
              <iframe
                      className="video"                     
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                      /> 
              </div>
               <div className="commentsSection">
                <div className="row">
                  <div className="col-8">
                    <Comment username={user.username} comment={comment} />
                  </div>
                </div>
            </div>
          </div>
        </div>       
         
        <div className="relatedvideo-conatiner">
          
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













                