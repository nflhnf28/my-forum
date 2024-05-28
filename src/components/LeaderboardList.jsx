import LeaderboardItem from "./LeaderboardItem";
import { useEffect } from 'react';
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";
import { useDispatch, useSelector } from "react-redux";

function LeaderboardList() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const leaderboards = useSelector((state) => state.leaderboards); // Select leaderboards data from store

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards()); // Dispatch async action to fetch leaderboards data
  }, [dispatch]);

  return (
    <div className="leaderboards-list">
      <h2>Active Users Leaderboard</h2>
      <div className="leaderboards-list__header">
        <p className="leaderboards-list__user-label">Users</p>
        <p className="leaderboards-list__score-label">Score</p>
      </div>

      {/* @TODO: render leaderboard content here */}
      <div className="leaderboards-list__content">
        {leaderboards.map(({ user, score }, index) => (
          <LeaderboardItem key={index} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardList;