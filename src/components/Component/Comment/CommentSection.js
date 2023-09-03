import React, { useState } from "react";
import AddComment from "./AddComment";
import "./CommentSection.scss";
import Divider from "../UI/Divider";
import CommentGallery from "./CommentGallery";

const CommentSection = ({
  comments,
  userAvatar,
  userName,
  handleNewComment,
}) => {
  const [newCommentText, setNewCommentText] = useState("");

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

  const handlePostNewComment = (event) => {
    event.preventDefault();
    // Implement logic to post new comment
    handleNewComment(newCommentText);
    setNewCommentText("");
  };

  return (
    <div className="comment-section">
      <h3 className="comment-section__comment-count">
        {comments.length} comments
      </h3>
      <AddComment
        value={newCommentText}
        handleChange={handleNewCommentChange}
        handleSubmit={handlePostNewComment}
        avatarSrc={userAvatar}
        userName={userName}
      />

      <Divider />
      <CommentGallery comments={comments} />
    </div>
  );
};

export default CommentSection;
