import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { postedAt } from "../utils";

function CommentItem(comment) {
  const { owner, content, createdAt, upVotesBy, downVotesBy } = comment.comment;

  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__owner-info">
          <p>{owner.name}</p>
          <p>images</p>
          <p className="posted-at">{postedAt(createdAt)}</p>
        </div>
      </header>

      {/* content here */}
      <p
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer>
        <button type="button" className="comment-upvote__button">
          <AiOutlineLike />
          <span className="comment-upvote__label">{upVotesBy.length}</span>
        </button>
        <button type="button" className="comment-downvote__button">
          <AiOutlineDislike />
          <span className="comment-downvote__label">{downVotesBy.length}</span>
        </button>
      </footer>
    </div>
  )
}

export default CommentItem;