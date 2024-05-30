import { useState } from "react";
import PropTypes from "prop-types";

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment({ content });
    setContent(''); // Clear input field after submission
  };

  return (
    <div className="thread-comment__input">
      <h3>Comment here:</h3>
      <div className="form-container">
        <form className="comment-input" onSubmit={handleSubmit}>
          <input
            className="comment-input__field"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default CommentInput;
