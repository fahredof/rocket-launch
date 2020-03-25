import React from "react";
import "./launch-list.css";

import withLaunchList from "../hoc/withLaunchList";

import LaunchListItem from "../launch-list-item";
import Spinner from "../spinner";

const LaunchList = ({items, loading, error}) => {

    const listItems = items.map((item, index) => {
        return (
            <LaunchListItem
                key={index}
                itemId={index}
                item={item}
            />
        )
    });

    console.log(loading);
    const load = loading ? <Spinner/> : null;
    //console.log(load);

    const content = items
        ? <div>
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
        : null;



    return (
        <div>
            {load}
            {content}
        </div>
    )
};

export default withLaunchList(LaunchList);