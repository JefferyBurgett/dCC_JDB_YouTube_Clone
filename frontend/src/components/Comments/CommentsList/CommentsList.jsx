import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CommentLists.css";

const CommentList = (props) => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    displayComment();
  }, [props.videoId]);

  async function displayComment() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comment/all/${videoId}/`
    );
    setComments(response.data);
    
  }

  return (
    <div>
      <p className="comment-list">Comments List: </p>
      <div className="commentlist">
        {comments.map(function (comment, index) {
          return (
            <div key={index} className="singlecomment">
              <p>
                Userame: <span>{comment.user.username}</span>
              </p>
              <div className="commentText-label">
                Comment:
                <br />
              </div>
              <div className="commenttext-container">
                <div className="commentText">
                  <p>{comment.text}</p>
                </div>
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;