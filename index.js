

const getTimeUntilGracesBday = () => {
    const today = new Date();
    const gracesBday = new Date('2/21/2020');
    const difference = gracesBday - today;
    const days = difference / (24 * 3600 * 1000);
    const hours = 24 * (days % 1);
    const minutes = 60 * (hours % 1);
    const seconds = 60 * (minutes % 1);

    const humanReadableDiff = `${parseInt(days)} days, ${parseInt(hours)} hours, ${parseInt(minutes)} minutes, and ${parseInt(seconds)} seconds`

    document.getElementById('time').innerHTML = humanReadableDiff
}
getTimeUntilGracesBday()

setInterval(getTimeUntilGracesBday, 1000)
