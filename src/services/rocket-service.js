export default class RocketService {
    _api = "https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json"

    fetchData = async () => {
        const res = await fetch(this._api);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._api}, 
                                server end with status ${res.status}`);
        }

        return res.json();
    };
}