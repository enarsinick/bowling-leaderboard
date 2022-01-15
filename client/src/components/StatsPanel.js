const StatsPanel = () => {
    return (
        <div className="stats-panel">
            <span className="vertical-line"></span>
            <div className="stats-panel-main">
                <div className="stats-panel-main-position">
                    <p>1</p>
                </div>
                <div className="stats-panel-main-img"></div>
                <p className="stats-panel-main-name">Nicholas Cave</p>
                <p className="stats-panel-main-wins">25 wins</p>
            </div>
            <div className="stats-panel-content">
                <div className="stats-panel-content-col">
                    <p>Played</p>
                    <p>25</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Won</p>
                    <p>175</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Top Score</p>
                    <p>25</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Total</p>
                    <p>768</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Spares</p>
                    <p>12</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Strikes</p>
                    <p>8</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Average</p>
                    <p>135.2</p>
                </div>
            </div>
        </div>
    );
};

export default StatsPanel;
