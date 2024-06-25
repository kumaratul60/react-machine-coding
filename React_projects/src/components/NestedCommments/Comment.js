import React, { useState } from "react";
import CommentList from "./CommentList";

const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
    }
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={() => setReplyText("Replying...")}>Reply</button>
      {replyText && (
        <div>
          <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}
      {comment.replies.length > 0 && <CommentList comments={comment.replies} addReply={addReply} />}
    </div>
  );
};

export default Comment;
