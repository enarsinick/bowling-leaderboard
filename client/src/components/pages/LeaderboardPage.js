import PageHeader from "../PageHeader";
import StatsPanel from "../StatsPanel";
import StatsEyebrow from "../StatsEyebrow";

const LeaderboardPage = () => {
    return (
        <main>
            <PageHeader eyebrow="Leaderboard" title="Stroud Bowling League" />
            <div className="stats">
                <StatsEyebrow />
                <StatsPanel />
                <StatsPanel />
                <StatsPanel />
                <StatsPanel />
                <StatsPanel />
            </div>
        </main>
    );
};

export default LeaderboardPage;
