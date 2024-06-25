import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./style.css";

const initialComments = [
  {
    id: 1,
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        replies: [],
      },
    ],
  },
];

const NestedCommentWidget = () => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (text) => {
    setComments([...comments, { id: Date.now(), text, replies: [] }]);
  };

  const addReply = (commentId, text) => {
    const addReplyRecursively = (comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), text, replies: [] }],
          };
        }
        return {
          ...comment,
          replies: addReplyRecursively(comment.replies),
        };
      });
    };

    setComments(addReplyRecursively(comments));
  };

  return (
    <div className="nested-comment-widget">
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} addReply={addReply} />
    </div>
  );
};

export default NestedCommentWidget;
