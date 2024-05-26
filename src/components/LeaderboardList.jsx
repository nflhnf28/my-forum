import LeaderboardItem from "./LeaderboardItem";
import { useState, useEffect } from 'react';
import axios from 'axios';

function LeaderboardList() {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await axios.get(
          'https://forum-api.dicoding.dev/v1/leaderboards'
        );
        setLeaderboards(response.data.data.leaderboards);
      } catch (error) {
        console.error('Error fetching leaderboards:', error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <div className="leaderboards-list">
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