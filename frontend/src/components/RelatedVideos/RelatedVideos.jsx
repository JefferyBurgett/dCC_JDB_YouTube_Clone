import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
    const { videoId } = useParams();
    const [ relatedVideos, setRelatedVideos ] = useState([]);

    useEffect(() => {
        getRelatedVideos(videoId)
      }, []);

    async function getRelatedVideos(videoId) {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyDSgal95ALrOJIXespWblS5Z0hDKSKRL6Q&part=snippet`);
          console.log(response.data.items);
        setRelatedVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    async function clickHandle() {
      getRelatedVideos(videoId);
    }

    return (
       <div>
          <div className="relatedvideo-item">
            {relatedVideos.map((video) => (
              <div>
              <p key={video.id} className="singlerelatedvideo"></p>
              <Link 
                onClick={[ clickHandle,(video.id.videoId)
                ]}
                to={`/${video.id.videoId}`}>
               <img src={video.snippet.thumbnails.medium.url}></img>
               <p className="videotitle"> {video.snippet.title}</p>
              </Link>             
              <br/>
              <br/>
              </div>
             
            ))}   
          </div>
        </div>
      );
    };     
    
    export default RelatedVideos;
           
          
