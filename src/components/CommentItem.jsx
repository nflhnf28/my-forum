// import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { postedAt } from "../utils";

function CommentItem({ comment }) {
  // Check if comment is defined before accessing its properties
  if (!comment) {
    return null;
  }

  const { owner, content, createdAt, upVotesBy, downVotesBy } = comment;

  // Check if owner is defined before accessing its properties
  const ownerName = owner ? owner.name : "Unknown";

  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__owner-info">
          <p>{ownerName}</p>
        </div>
      </header>

      <p dangerouslySetInnerHTML={{ __html: content }} />
      <p className="posted-at">{postedAt(createdAt)}</p>

      <footer>
        <button type="button" className="comment-upvote__button">
          <AiOutlineLike />
          <span className="comment-upvote__label">{upVotesBy ? upVotesBy.length : 0}</span>
        </button>
        <button type="button" className="comment-downvote__button">
          <AiOutlineDislike />
          <span className="comment-downvote__label">{downVotesBy ? downVotesBy.length : 0}</span>
        </button>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    owner: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    upVotesBy: PropTypes.array,
    downVotesBy: PropTypes.array,
  }),
};

export default CommentItem;
