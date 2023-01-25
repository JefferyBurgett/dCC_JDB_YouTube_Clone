import React, { useState} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "./CommentForm.css"

const CommentForm = (props) => {
    const [user, token] = useAuth();
    const { videoId } = useParams();
    const [text, setText] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    async function handleSubmit(event) {
      try {
        event.preventDefault();
        let addNewComment = {
            video_id: videoId,
            text: text,
            user: user,
            likes: likes,
            dislikes: dislikes,
        };
    await axios.post("http://127.0.0.1:8000/api/comment/", addNewComment, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    });
    props.setComments(true);
    setText("");
    } catch (error) {
      console.log(error.message);
    }
    };

    return (
        <form className="commentform" onSubmit={handleSubmit}>
          <div>
            <p className="username">
              Username: <span>{user.username}</span>
            </p>
          </div>
          <div>
            <label>
              Comment: <br />
              <textarea
                className="comment-textarea"
                rows={8}
                cols={138}
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
              ></textarea>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default CommentForm;