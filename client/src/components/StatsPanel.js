import { useEffect, useState } from "react";

const StatsPanel = ({ position, data }) => {
    const [wins, setWins] = useState("");
    const [topScore, setTopScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [spares, setSpares] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [average, setAverage] = useState(0);

    const calcwins = () => {
        let wins = 0;
        data.scores.forEach((item) => {
            if (item.win) {
                wins++;
            }
        });
        setWins(wins);
        // wins > 1 || wins === 0
        //     ? setWins(`${wins} wins`)
        //     : setWins(`${wins} win`);
    };

    const calcTopScore = () => {
        let top = [];
        data.scores.forEach((item) => {
            top.push(item.total);
        });
        top.length === 0
            ? setTopScore(0)
            : setTopScore(Math.max.apply(Math, top));
    };

    const calcTotal = () => {
        let sum = 0;
        data.scores.forEach((item) => {
            sum += item.total;
        });
        setTotal(sum);
    };

    const calcStrikes = () => {
        let sum = 0;
        data.scores.forEach((item) => {
            sum += item.strikes;
        });
        setStrikes(sum);
    };

    const calcSpares = () => {
        let sum = 0;
        data.scores.forEach((item) => {
            sum += item.spares;
        });
        setSpares(sum);
    };

    useEffect(() => {
        calcwins();
        calcTopScore();
        calcTotal();
        calcStrikes();
        calcStrikes();
        calcSpares();
    }, []);

    useEffect(() => {
        total === 0 ? setAverage(0) : setAverage(total / data.scores.length);
    }, [total]);

    return (
        <div className="stats-panel">
            <span className="vertical-line"></span>
            <div className="stats-panel-main">
                <div className="stats-panel-main-position">
                    <p>{position}</p>
                </div>
                <div className="stats-panel-main-img"></div>
                <p className="stats-panel-main-name">{data.playerName}</p>
                <p className="stats-panel-main-wins">{wins} wins</p>
            </div>
            <div className="stats-panel-content">
                <div className="stats-panel-content-col">
                    <p>Played</p>
                    <p>{data.scores.length}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Wins</p>
                    <p>{wins}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Top Score</p>
                    <p>{topScore}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Total</p>
                    <p>{total}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Spares</p>
                    <p>{spares}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Strikes</p>
                    <p>{strikes}</p>
                </div>
                <div className="stats-panel-content-col">
                    <p>Average</p>
                    <p>{average}</p>
                </div>
            </div>
        </div>
    );
};

export default StatsPanel;
