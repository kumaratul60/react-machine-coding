import { useState } from "react";

const useCommentTree = (initialComments) => {
  const [textAsComments, setTextAsComments] = useState(initialComments);

  // Insert
  const insertNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, content],
        };
      } else if (comment?.replies) {
        return {
          ...comment,
          replies: insertNode(comment?.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    if (commentId) {
      setTextAsComments((prevComments) => insertNode(prevComments, commentId, newComment));
    } else {
      setTextAsComments((prevComments) => [newComment, ...prevComments]);
    }
  };

  // Edit
  const editNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content,
          timestamp: new Date().toISOString(),
        };
      } else if (comment?.replies) {
        return {
          ...comment,
          replies: editNode(comment?.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const editComment = (commentId, content) => {
    setTextAsComments((prevComments) => editNode(prevComments, commentId, content));
  };

  // Delete
  const deleteNode = (tree, nodeId) => {
    return tree.reduce((acc, node) => {
      if (node?.id === nodeId) {
        return acc;
      } else if (node?.replies) {
        node.replies = deleteNode(node.replies, nodeId);
      }
      return [...acc, node];
    }, []);
  };

  const deleteComment = (commentId) => {
    setTextAsComments((prevComments) => deleteNode(prevComments, commentId));
  };

  // Like
  const likeNode = (tree, commentId) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      } else if (comment?.replies) {
        return {
          ...comment,
          replies: likeNode(comment?.replies, commentId),
        };
      }
      return comment;
    });
  };

  const likeComment = (commentId) => {
    setTextAsComments((prevComments) => likeNode(prevComments, commentId));
  };

  // Dislike
  const dislikeNode = (tree, commentId) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          dislikes: comment.dislikes + 1,
        };
      } else if (comment?.replies) {
        return {
          ...comment,
          replies: dislikeNode(comment?.replies, commentId),
        };
      }
      return comment;
    });
  };

  const dislikeComment = (commentId) => {
    setTextAsComments((prevComments) => dislikeNode(prevComments, commentId));
  };

  return {
    textAsComments,
    insertComment,
    editComment,
    deleteComment,
    likeComment,
    dislikeComment,
  };
};

export default useCommentTree;
