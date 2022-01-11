import PageHeader from "../PageHeader";
import StatsPanel from "../StatsPanel";

const LeaderboardPage = () => {
    return (
        <main>
            <PageHeader eyebrow="Leaderboard" title="Stroud Bowling League" />
            <div className="stats">
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
