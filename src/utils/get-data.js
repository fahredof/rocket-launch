import {
    setDays,
    setHours,
    setMinutes
} from "./set-data";

const isolateDays = (different) => Math.floor((different / 86400000));
const isolateHours = (different) => Math.floor((different % 86400000) / 3600000);
const isolateMinutes = (different, rounding) => rounding(((different % 86400000) % 3600000) / 60000);

const getTime = (launch) => {
    const {years, months, date, hours, minutes} = launch;
    let rounding = Math.floor;
    let different = new Date() - new Date(years, months, date, hours, minutes);

    if (different < 0) {
        different *= -1;
        rounding = Math.ceil;
    }

    return {
        days: setDays(isolateDays(different)),
        hours: setHours(isolateHours(different)),
        minutes: setMinutes(isolateMinutes(different, rounding))
    };
};

const getDifferenceOfDate = (launch) => {
    const {years, months, date, hours, minutes} = launch;
    return new Date() - new Date(years, months, date, hours, minutes);
};

export {
    getTime,
    getDifferenceOfDate
}