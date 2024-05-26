// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { postedAt } from '../utils';

function ThreadDetail({ body, createdAt, owner, /* likes, authUser, likeTalk,*/ }) {

  return (
    <section className="talk-detail">
      <header>
        <div className="talk-detail__user-info">
          <p className="talk-detail__user-name">{owner}</p>
        </div>
      </header>
      <article>
        <p className="talk-detail__text">{body}</p>
      </article>
      <footer>
        <div className="talk-detail__like">
        </div>
        <p className="talk-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

// const userShape = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
// };

// TalkDetail.propTypes = {
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   likes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   user: PropTypes.shape(userShape).isRequired,
//   authUser: PropTypes.string.isRequired,
//   likeTalk: PropTypes.func.isRequired,
// };

export default ThreadDetail;
