

const format = (time, unit) => {
    const roundedTime = parseInt(time);
    return roundedTime !== 1 ? `${roundedTime} ${unit}s` : `${roundedTime} ${unit}`
}
const getTimeUntilGracesBday = () => {
    const today = new Date();
    const thisYear = today.getFullYear()
    const gracesBday = new Date(`2/21/${thisYear}`);
    const difference = gracesBday - today;
    const days = difference / (24 * 3600 * 1000);
    const hours = 24 * (days % 1);
    const minutes = 60 * (hours % 1);
    const seconds = 60 * (minutes % 1);

    const humanReadableDiff = `${format(days, 'day')}
                                 ${format(hours, 'hour')} 
                                 ${format(minutes, 'minute')} 
                                 ${format(seconds, 'second')}`

    document.getElementById('time').innerHTML = humanReadableDiff
}
getTimeUntilGracesBday()

setInterval(getTimeUntilGracesBday, 1000)
