import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({ body, createdAt, category }) {
  return (
    <section className="thread-detail">
      <header className="thread-header">
        <p className="thread-header__category">{category}</p>
      </header>
      <article>
        {/* <p className="talk-detail__text">{body}</p> */}
        <p
          className="talk-detail__text"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </article>
      <footer>
        <div className="talk-detail__like">
        </div>
        <p className="talk-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

ThreadDetail.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadDetail;
