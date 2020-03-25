import React, {useState, useEffect, useCallback} from "react";
import RocketService from "../../services/rocket-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withLaunchList = (View) => {
    return () => {

        const rocketService = new RocketService();
        const {fetchData} = rocketService;

        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);

        useEffect(() => {
            console.log("useEffect");
            setTimeout(() => {
                fetchData()
                    .then((item) => {
                        setItems(item);
                        setLoading(false);
                        setError(false);
                    })
                    .catch(() => {
                        setItems(null);
                        setError(true);
                        setLoading(false);
                    })
            }, 1000)
        }, []);

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <View
                items={items}
            />
        )
    }
};

export default withLaunchList;