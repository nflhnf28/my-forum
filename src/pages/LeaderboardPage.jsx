import LeaderboardList from "../components/LeaderboardList";

function LeaderboardPage() {
  return (
    <section className='board-page'>
      <h2>Active Users Leaderboard</h2>
      <LeaderboardList />
    </section>
  );
}

export default LeaderboardPage;