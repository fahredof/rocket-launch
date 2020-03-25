import React, {Fragment} from "react";
//import "./launch-list-item.css"

const LaunchListItem = ({itemId, item}) => {
    const {mission, launch, vehicle, location} = item;

    return (
        <Fragment>
            <tr>
                <td>{itemId + 1}</td>
                <td>{mission}</td>
                <td>{vehicle}</td>
                <td>{location}</td>
            </tr>
        </Fragment>
    )
};

export default LaunchListItem