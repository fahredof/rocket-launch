import React from "react";
import withLaunchList from "../hoc/with-launch-list";
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
                        <th scope="col">Launch Date</th>
                        <th scope="col">Timer</th>
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