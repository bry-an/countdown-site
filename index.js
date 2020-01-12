

const timeUntilGracesBirthday = () => {
    const today = new Date();
    const gracesBday = new Date('2/21/2020');
    const milliseconds = gracesBday - today;
    const millsInADay = 86400000;
    const days = (milliseconds/millsInADay).toFixed(2)

    return days;
}

document.getElementById('days').innerHTML = timeUntilGracesBirthday()