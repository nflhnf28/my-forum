import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

function ThreadDetail({ title, body, createdAt, category, upVotesBy, downVotesBy, owner }) {
  return (
    <section className="thread-detail">
      <header className="thread-header">
        <p className="thread-header__category">#{category}</p>
      </header>
      <article>
        <h3>{title}</h3>
        <p
          className="thread-detail__text"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </article>
      <footer>
        <div className='button-actions'>
          <button className="thread-upvote__button">
            <AiOutlineLike />
            <span className="thread-upvote__count">{upVotesBy?.length}</span>
          </button>
          <button className="thread-downvote__button">
            <AiOutlineDislike />
            <span className="thread-downvote__count">{downVotesBy?.length}</span>
          </button>
          <p className="thread-item__owner">Posted by <strong>{owner?.name},</strong></p>
          <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
        </div>
      </footer>
    </section>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
};

export default ThreadDetail;
