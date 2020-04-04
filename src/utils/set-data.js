const nameOfMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November ", "December"
];

const setYear = (whole) => whole !== null ? whole : "";
const setMonth = (whole) => whole !== null ? nameOfMonths[whole] : "";
const setQuarter = (whole) => whole !== null ? `in the ${whole} quarter` : "";

const setDays = (whole) => whole > 0 ? `${whole} day(s),` : "";
const setHours = (whole) => whole < 10 ? `0${whole}` : whole;
const setMinutes = (whole) => whole < 10 ? `0${whole}` : whole;

export {
    setYear,
    setMonth,
    setQuarter,
    setDays,
    setHours,
    setMinutes,
    nameOfMonths
}