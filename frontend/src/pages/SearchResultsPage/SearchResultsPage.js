import React, { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
// import "./NavBar"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import { Link } from "react-router-dom"

let initialValues = {
    user: "",
    video_id: "",
    text: "",
    likes: "",
    dislikes: "",
};

const SearchResultsPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)
    const [videos, setVideos] = useState([]);
    
    return (
      <div>
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
            ))};
    </div>   
);       
};

export default SearchResultsPage;