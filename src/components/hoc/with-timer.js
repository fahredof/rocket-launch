import React, {useState} from "react";
import {getDifferent} from "../../utils";

const withTimer = (View) => {
    return ({launch}) => {

        const {years, months, date, hours, minutes} = launch;
        let launchTimer = null;

        if (((years && months && date && hours && minutes) != null)) {
            const different = getDifferent(launch);
            const {days, hours, minutes} = different;

            const [dif, setDif] = useState({
                day: days,
                hour: hours,
                minute: minutes
            });

            setTimeout(() => {
                const different = getDifferent(launch);
                const {days, hours, minutes} = different;
                setDif({
                    day: days,
                    hour: hours,
                    minute: minutes
                });
            }, 60000 - (new Date().getSeconds() * 1000));

            const {day, hour, minute} = dif;
            launchTimer = `${day} ${hour}:${minute}`;
        }

        return (
            <View
                launchTimer={launchTimer}
            />
        )
    }
};

export default withTimer;