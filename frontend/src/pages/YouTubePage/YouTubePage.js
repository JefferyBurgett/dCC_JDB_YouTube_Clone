import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";


import axios from "axios";

const YouTubePage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const [user, token] = useAuth();
    const [comment, setComments] = useState([]);
    console.log(user);
    console.log(token);
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/comment/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setComments(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchComments();
    }, [token]);
    return (
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        {comment &&
          comment.map((comment) => (
            <p key={comment.id}>
              {comment.video_id} {comment.text}
            </p>
          ))}
      </div>
    );
  };
  
  export default YouTubePage;