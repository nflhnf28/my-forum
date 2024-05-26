
function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboards-list__item">
      <p className="leaderboard-item__user-info">{user.name}</p>
      <p className="leaderboards-list__score">{score}</p>
    </div>
  );
}

export default LeaderboardItem;