
const gracesBday = new Date(`2/21/${new Date().getFullYear()}`);

const format = (time, unit) => {
    const roundedTime = parseInt(time);
    return roundedTime !== 1 ? `${roundedTime} ${unit}s` : `${roundedTime} ${unit}`
}
const isGracesBirthday = () => {
    const today = new Date();
    const millisecondsInADay = 86400000;
    if ((gracesBday - today) < millisecondsInADay) {
        return true;
    }
    return false;
}

const itsHerBirthday = () => {
    document.getElementById('yes-or-no').innerHTML = 'Yes!';
    document.getElementById('time-until').innerHTML = '🎉 Wish Her a Happy Birthday 🎉';
    document.getElementById('fireworks').style.display = 'inherit'

}
const getTimeUntilGracesBday = () => {
    const today = new Date();
    const differenceInMillis = gracesBday - today;
    const days = differenceInMillis / (24 * 3600 * 1000);
    const hours = 24 * (days % 1);
    const minutes = 60 * (hours % 1);
    const seconds = 60 * (minutes % 1);

    const humanReadableDiff = `
                                ${format(days, 'day')}
                                 ${format(hours, 'hour')} 
                                 ${format(minutes, 'minute')} 
                                 ${format(seconds, 'second')}
                                `

    document.getElementById('time').innerHTML = humanReadableDiff
}

if (isGracesBirthday()) {
    itsHerBirthday();
} else {
    getTimeUntilGracesBday();
    setInterval(getTimeUntilGracesBday, 1000);
}

