import React from "react";
import {getDifferenceOfDate} from "../../utils/get-data";
import {
    setYear,
    setMonth,
    setQuarter,
    setHours,
    setMinutes,
    nameOfMonths
} from "../../utils/set-data";

const withLaunchDate = (View) => {
    return ({launch}) => {

        const {years, months, date, hours, minutes, quarter} = launch;
        const allData = (years && months && date && hours && minutes);
        let startingDate;

        const different = getDifferenceOfDate(launch);

        if (allData != null) {
            const launchStart = different < 0 ? "The launch will be" : "The launch was";
            startingDate = `
                        ${launchStart}
                        ${nameOfMonths[months]} ${date} ${years} 
                        at ${setHours(hours)}:${setMinutes(minutes)}
                    `;
        } else {
            startingDate = `
                        The launch will be in ${setMonth(months)} 
                        ${setYear(years)} ${setQuarter(quarter)}
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