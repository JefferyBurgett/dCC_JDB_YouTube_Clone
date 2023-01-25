import CommentForm from "./CommentForm/CommentForm";
import CommentsList from "./CommentsList/CommentsList";
import { useState } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState();

  return (
    <div>
      <CommentForm setComment={setComment} />
      <CommentsList comment={comment} setComment={setComment} />
    </div>
  );
};

export default Comment;