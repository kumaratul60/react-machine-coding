import { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
