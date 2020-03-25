import React, {useState, useEffect} from "react";
import RocketService from "../../services/rocket-service";
import Spinner from "../spinner";

const withLaunchList = (View) => {
    return () => {

        const rocketService = new RocketService();
        const {fetchData} = rocketService;

        const [items, setItems] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);

        useEffect(() => {
            setLoading(true);
            updateItem();
            console.log("useEffect");
        }, []);

        const updateItem = () => {
            setLoading(true);
            setTimeout(() => {
                fetchData()
                    .then((item) => {
                        setItems(item);
                        setLoading(false);
                        setError(false);
                    })
                    .catch((error) => {
                        setItems(null);
                        setError(true);
                        setLoading(false);
                    })
            }, 1000)

        };

        if (items === null) {
            return <Spinner/>
        }

        return (
            <View
                items={items}
                loading={loading}
                error={error}
            />
        )
    }

};

export default withLaunchList;