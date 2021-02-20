const yearOfNextBDay = () => {
  const thisYear = new Date().getFullYear();
  const today = new Date();
  const endOfGracesBirthday = new Date(`2/22/${thisYear}`);
  if (today > endOfGracesBirthday) {
    return new Date().getFullYear() + 1;
  }
  return new Date().getFullYear();
};
const gracesBday = new Date(`2/21/${yearOfNextBDay()}`);

const format = (time, unit) => {
  const roundedTime = parseInt(time);
  return roundedTime !== 1
    ? `${roundedTime} ${unit}s`
    : `${roundedTime} ${unit}`;
};
const isGracesBirthday = () => {
  const today = new Date();
  const millisecondsInADay = 86400000;
  const gracesBday = new Date(`2/21/${yearOfNextBDay()}`);
  console.log(today, gracesBday, today-gracesBday)
  if ((today - gracesBday > 0) && (today - gracesBday < millisecondsInADay)) {
    return true;
  }
  return false;
};

const itsHerBirthday = () => {
  document.getElementById("yes-or-no").innerHTML = "Yes!";
  document.getElementById("time-until").innerHTML =
    "🎉 Wish Her a Happy Birthday 🎉";
  document.getElementById("fireworks").style.display = "inherit";
};

const getTimeUntilGracesBday = () => {
  const birthdayGirl = isGracesBirthday();

  if (birthdayGirl) {
    itsHerBirthday();
  }
  const today = new Date();
  const differenceInMillis = gracesBday - today;
  const days = differenceInMillis / (24 * 3600 * 1000);
  const hours = 24 * (days % 1);
  const minutes = 60 * (hours % 1);
  const seconds = 60 * (minutes % 1);

  const humanReadableDiff = `${format(days, "day")}, ${format(
    hours,
    "hour"
  )}, ${format(minutes, "minute")}, ${format(seconds, "second")}`;

  if (!birthdayGirl) {
    document.getElementById("time").innerHTML = humanReadableDiff;
  }
};

// run timer
getTimeUntilGracesBday();

setInterval(() => {
  if (isGracesBirthday()) {
    itsHerBirthday();
  } else {
    getTimeUntilGracesBday();
  }
}, 1000);
