import React from "react";
import "./launch-list.css";
import withLaunchList from "../hoc/withLaunchList";
import LaunchListItem from "../launch-list-item";

const LaunchList = ({items}) => {

    const listItems = items.map((item, index) => {
        return (
            <LaunchListItem
                key={index}
                itemId={index}
                item={item}
            />
        )
    });

    return (
        <div>
            <div>
                <table className="table table-responsive-sm">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">mission</th>
                        <th scope="col">vehicle</th>
                        <th scope="col">location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default withLaunchList(LaunchList);