import { useState } from "react";

const Comment = ({
  singleComment = {},
  onSubmitComment = () => {},
  onEditComment = () => {},
  onDeleteComment = () => {},
}) => {
  const [expand, setExpand] = useState(false);
  const [replyComment, setReplyComment] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(singleComment?.content);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleReplySubmit = () => {
    if (replyComment) {
      onSubmitComment(singleComment?.id, replyComment);
      setReplyComment("");
    }
  };

  const handleReplyCommentChange = (e) => {
    if (editMode) {
      setEditedContent(e.target.value);
    } else {
      setReplyComment(e.target.value);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    // Reset edited content to current comment content
    setEditedContent(singleComment?.content);
  };

  const handleEditSubmit = () => {
    onEditComment(singleComment?.id, editedContent);
    setEditMode(false);
  };
  return (
    <div className="comment">
      {!editMode ? (
        <>
          <p className="comment-content">{singleComment?.content}</p>
          <p className="comment-info">Votes: {singleComment?.votes}</p>
          <p className="comment-info">{new Date(singleComment?.timestamp).toLocaleString()}</p>
        </>
      ) : (
        <div className="add-comment">
          <textarea
            value={editedContent}
            onChange={handleReplyCommentChange}
            rows={2}
            cols={40}
            className="comment-textarea"
          />
          <button onClick={handleEditSubmit} className="comment-btn">
            Save Edit
          </button>
          <button onClick={toggleEditMode} className="comment-btn">
            Cancel Edit
          </button>
        </div>
      )}

      <div className="comment-actions">
        <button className="comment-btn" onClick={toggleExpand}>
          {expand ? "Hide Reply" : "Reply"}
        </button>
        <button className="comment-btn" onClick={toggleEditMode}>
          Edit
        </button>
        <button className="comment-btn" onClick={() => onDeleteComment(singleComment?.id)}>
          Delete
        </button>
      </div>

      {expand && (
        <>
          <div className="add-comment">
            <textarea
              value={replyComment}
              onChange={handleReplyCommentChange}
              rows={2}
              cols={40}
              placeholder="Add a new comment..."
              className="comment-textarea"
            />
            <button className="comment-btn" onClick={handleReplySubmit}>
              Add Comment
            </button>
          </div>
          {singleComment?.replies?.map((reply) => {
            return (
              <Comment
                key={reply.id}
                singleComment={reply}
                onSubmitComment={onSubmitComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Comment;
