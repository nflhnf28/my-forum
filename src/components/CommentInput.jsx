import { useState } from "react";
import PropTypes from "prop-types";

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');

  return (
    <div className="thread-comment__input">
      <h3>Comment here:</h3>
      <form className="comment-input">
        <input className="comment-input__field"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)} />
        <button type="submit" onClick={() => addComment({ content })}>Kirim</button>
      </form>
    </div>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func
}

export default CommentInput;