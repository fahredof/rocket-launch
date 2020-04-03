import React from "react";
import withLaunchDate from "../hoc/with-launch-date";

const LaunchDate = ({startingDate}) => {
    return (
        <>
            {startingDate}
        </>
    )
};

export default withLaunchDate(LaunchDate);