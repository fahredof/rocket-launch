import React, {Component} from "react";
import RocketService from "../../services/rocket-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withLaunchList = (View) => {
    return class extends Component {
        rocketService = new RocketService();

        state = {
            items: [],
            loading: true,
            error: false
        };

        componentDidMount() {
            const {fetchData} = this.rocketService;

            setTimeout(() => {
                fetchData()
                    .then((item) => {
                        this.setState({
                            items: item,
                            loading: false,
                            error: false
                        });
                    })
                    .catch(() => {
                        this.setState({
                            items: null,
                            loading: false,
                            error: true
                        });
                    })
            }, 1000);
        }

        render() {
            const {items, loading, error} = this.state;

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
    }
};

export default withLaunchList;