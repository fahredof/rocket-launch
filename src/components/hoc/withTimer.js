import React from "react";

const withTimer = (View) => {
    return (props) => {
        return (
            <View
                {...props}
            />
        )
    }
};

export default withTimer;