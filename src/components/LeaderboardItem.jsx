import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboards-list__item">
      <img src={user.avatar} alt={user.name} className='user-photo' />
      <p className="leaderboard-item__user-info">{user.name}</p>
      <p className="leaderboards-list__score">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
  score: PropTypes.number.isRequired,
}

export default LeaderboardItem;