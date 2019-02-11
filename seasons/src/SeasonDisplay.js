import './SeasonDisplay.css';

import React from 'react';

const seasonConfig = {
    winter: {
        text: "Burr, it's chilly",
        iconName: "snowflake"
    },
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    }
};

const getSeason = (lat, month) => {
    const isMidMonths = month >= 3 && month <= 8;
    const isNorthenHemisohere = lat > 0;
    let season = "summer";
    if (
        (isNorthenHemisohere && !isMidMonths) ||
        (!isNorthenHemisohere && isMidMonths)
    ) {
        season = "winter";
    }
    return season;
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    );
}

export default SeasonDisplay;
