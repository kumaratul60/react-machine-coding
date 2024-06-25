import Comment from "./Comment";

const CommentList = ({ comments, addReply }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
};

export default CommentList;
