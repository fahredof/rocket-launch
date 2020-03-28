const currentDate = new Date(2000, 1, 29, 3, 1);
const launchDate = new Date(2020, 1, 29, 1, 7);
let different = launchDate - currentDate;

const getYear = () => {
    const normalYear = 31536000000;
    const leapYear = 31622400000;
    let countYears = 0;
    const is29Febr = currentDate.getFullYear() % 4 === 0 && currentDate.getDate() === 29;
    console.log(currentDate, launchDate);
    for (let i = currentDate.getTime(); i < launchDate.getTime();) {
        const d = new Date(i);
        // console.log(is29Febr, d.getFullYear() % 4 === 3);
        if (is29Febr && d.getFullYear() % 4 === 3) {
            if (launchDate.getTime() - i > leapYear) {
                countYears++;
                different -= normalYear;
                i += normalYear;
                console.log(new Date(launchDate.getTime() - different));
            } else continue;
        }
        if ((d.getFullYear() % 4 === 0 && d.getMonth() < 2) || (d.getFullYear() % 4 === 3 && d.getMonth() > 1)) {
            if (launchDate.getTime() - i > leapYear) {
                countYears++;
                different -= leapYear;
                i += leapYear;
            } else break;
        }
        else {
            if (launchDate.getTime() - i > normalYear) {
                countYears++;
                different -= normalYear;
                i += normalYear;
            } else break;
        }
        console.log(new Date(launchDate.getTime() - different));
    }
    return countYears;
};

const getMonth = () => {
    const defDate = new Date(launchDate.getTime() - different);
    let countMonth = 0;
    const _1day = 86400000;
    const _29days = 2505600000;
    const _30days = 2592000000;
    const _31days = 2678400000;
    const yearOfMonths = [_31days, defDate.getFullYear() % 4 === 0 ? _29days : _29days - _1day, _31days, _30days,
        _31days, _30days, _31days, _31days, _30days, _31days, _30days, _31days];

    for (let i = defDate.getTime(); i < launchDate.getTime();) {
        const date = new Date(i);
        const month = date.getMonth();
        if (launchDate.getTime() - i > yearOfMonths[month]) {
            different -= yearOfMonths[month];
            i += yearOfMonths[month];
            countMonth++;
        } else break;
    }

    return countMonth;
};

const getDay = () => {
    return Math.floor(different / 86400000);
};


const countBeforeLaunch = () => {
    console.log("different:" + different);

    const year = getYear();
    const month = getMonth();
    const day = getDay();
    const hour = Math.floor((different % 86400000) / 3600000);
    const minute = Math.round(((different % 86400000) % 3600000) / 60000);

    console.log(new Date(launchDate.getTime() - different));
    console.log(
        `Left to launch: ${year} year(s) ${month} month(s) ${day} day(s), ${hour}:${minute}`);
};

export default countBeforeLaunch;