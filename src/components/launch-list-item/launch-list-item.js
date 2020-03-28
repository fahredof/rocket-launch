import React, {Fragment} from "react";
import Timer from "../timer";

const LaunchListItem = ({itemId, item}) => {
    const {mission, launch, vehicle, location} = item;

    return (
        <Fragment>
            <tr>
                <td>{itemId + 1}</td>
                <td>{mission}</td>
                <td>{vehicle}</td>
                <td>{location}</td>
                <td><Timer launch={launch}/></td>
            </tr>
        </Fragment>
    )
};

export default LaunchListItem