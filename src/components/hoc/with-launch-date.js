import React from "react";
import {
    feedYear,
    feedQuarter,
    feedMonth,
    feedHours,
    feedMinutes,
    nameOfMonths
} from "../../utils";

const withLaunchDate = (View) => {
    return ({launch}) => {

        const {years, months, date, hours, minutes, quarter} = launch;
        const allData = (years && months && date && hours && minutes);
        let startingDate;

        const currentDate = new Date();
        const launchDate = new Date(years, months, date, hours, minutes);
        let different = launchDate - currentDate;

        if ((allData != null) && (different > 0)) {
            startingDate = `
                        The launch will be
                        ${nameOfMonths[months]} ${date} ${years} 
                        at ${feedHours(hours)}:${feedMinutes(minutes)}
                    `;
        }

        if ((allData != null) && (different < 0)) {
            startingDate = `
                        The launch was
                        ${nameOfMonths[months]} ${date} ${years} 
                        at ${feedHours(hours)}:${feedMinutes(minutes)}
                    `;
        }

        if (((years || months || quarter) !== null) &&
            ((date && hours && minutes) === null)) {
            startingDate = `
                        The launch will be in ${feedMonth(months)} 
                        ${feedYear(years)} ${feedQuarter(quarter)}
                    `;
        }

        return (
            <View
                startingDate={startingDate}
            />
        )
    }
};

export default withLaunchDate;