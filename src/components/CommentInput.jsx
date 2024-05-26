import { useState } from "react";

function CommentInput({ addComment }) {
  const [commentar, setCommentar] = useState('');

  function addcomment() {
    if (commentar) {
      addComment(commentar);
      setCommentar('');
    }
  }

  return (
    <div className="thread-comment__input">
      <h3>Comment here:</h3>
      <form className="comment-input">
        <input className="comment-input__field"
          type="text"
          value={commentar}
          onChange={(e) => setCommentar(e.target.value)} />
        <button type="submit" onClick={addcomment}>Kirim</button>
      </form>
    </div>
  )
}

export default CommentInput;