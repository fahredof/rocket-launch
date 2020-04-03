import React from "react";
import withTimer from "../hoc/with-timer";

const Timer = ({launchTimer}) => {
    return (
        <>
            {launchTimer}
        </>
    );
};

export default withTimer(Timer);