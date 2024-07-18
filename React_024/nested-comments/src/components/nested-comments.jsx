import { useState } from "react";
import Comment from "./comment";

import useCommentTree from "../hooks/useCommentTree";
import "./styles.css";

const NestedComments = ({
  comments = [],
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {},
  // onUpvote = () => {},
  // onDownvote = () => {},
}) => {
  const [comment, setComment] = useState("");
  const {
    textAsComments: commentsData,
    insertComment,
    editComment,
    deleteComment,
  } = useCommentTree(comments);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
    // for user preference lke popup, or toast messages
    onSubmit(content);
  };

  const handleEdit = (commentId, content) => {
    editComment(commentId, content);
    onEdit(content);
  };

  const handleDelete = (commentId) => {
    deleteComment(commentId);
    onDelete(commentId);
  };

  const handleSubmit = () => {
    if (comment) {
      handleReply(undefined, comment);
      setComment("");
    }
  };

  return (
    <>
      <div className="add-comment">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          rows={2}
          cols={40}
          placeholder="Add a new comment..."
          className="comment-textarea"
        />
        <button className="comment-btn" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>

      {commentsData.map((coment) => (
        <Comment
          key={coment?.id}
          singleComment={coment}
          onSubmitComment={handleReply}
          onEditComment={handleEdit}
          onDeleteComment={handleDelete}
        />
      ))}
    </>
  );
};

export default NestedComments;
