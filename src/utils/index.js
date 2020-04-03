const nameOfMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November ", "December"
];

const isolateDays = (different) => Math.floor((different / 86400000));
const isolateHours = (different) => Math.floor((different % 86400000) / 3600000);
const isolateMinutes = (different, rounding) => rounding(((different % 86400000) % 3600000) / 60000);

const feedYear = (whole) => whole !== null ? whole : "";
const feedMonth = (whole) => whole !== null ? nameOfMonths[whole] : "";
const feedQuarter = (whole) => whole !== null ? `in the ${whole} quarter` : "";

const feedDays = (whole) => whole > 0 ? `${whole} day(s),` : "";
const feedHours = (whole) => whole < 10 ? `0${whole}` : whole;
const feedMinutes = (whole) => whole < 10 ? `0${whole}` : whole;

const getDifferent = (launch) => {
    const {years, months, date, hours, minutes} = launch;
    let different = new Date() - new Date(years, months, date, hours, minutes);

    if (different < 0) {
        different *= -1;
        return {
            days: feedDays(isolateDays(different)),
            hours: feedHours(isolateHours(different)),
            minutes: feedMinutes(isolateMinutes(different, Math.ceil))
        }
    }

    return {
        days: feedDays(isolateDays(different)),
        hours: feedHours(isolateHours(different)),
        minutes: feedMinutes(isolateMinutes(different, Math.floor))
    };
};

export {
    getDifferent,
    isolateDays,
    isolateHours,
    isolateMinutes,
    feedYear,
    feedQuarter,
    feedMonth,
    feedDays,
    feedHours,
    feedMinutes,
    nameOfMonths
}