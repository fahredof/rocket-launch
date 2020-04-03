import React, {Fragment} from "react";
import LaunchDate from "../launch-date";
import Timer from "../timer/timer";

const LaunchListItem = ({itemId, item}) => {
    const {mission, launch, vehicle, location} = item;

    return (
        <Fragment>
            <tr>
                <td>{itemId + 1}</td>
                <td>{mission}</td>
                <td>{vehicle}</td>
                <td>{location}</td>
                <td><LaunchDate launch={launch}/></td>
                <td><Timer launch={launch}/></td>
            </tr>
        </Fragment>
    )
};

export default LaunchListItem