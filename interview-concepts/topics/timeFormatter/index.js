// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

const convertTo24HrsFormat = (time) => {
  const loweredTime = time.toLowerCase();
  let [hours, mins] = loweredTime.split(":");

  if (loweredTime.endsWith("am")) {
    hours = hours === "12" ? "0" : hours;
  } else if (loweredTime.endsWith("pm")) {
    hours = hours === "12" ? "12" : String(+hours + 12);
  }

  return hours.padStart(2, "0") + ":" + mins.slice(0, -2).padStart(2, "0");
  //   return solution1(time);
};

const solution1 = (time) => {
  if (time.includes("AM")) {
    const timeArr = time.split(":");
    const hour = timeArr[0];
    const minute = timeArr[1];
    const newHour = parseInt(hour);
    const newMinute = parseInt(minute.slice(0, 2));
    if (newHour === 12) {
      return `00:${newMinute}`;
    }
    return `${newHour}:${newMinute}`;
  } else {
    const timeArr = time.split(":");
    const hour = timeArr[0];
    const minute = timeArr[1];
    const newHour = parseInt(hour);
    const newMinute = parseInt(minute.slice(0, 2));
    if (newHour === 12) {
      return `${newHour}:${newMinute}`;
    }
    return `${newHour + 12}:${newMinute}`;
  }
};

module.exports = convertTo24HrsFormat;

console.log(convertTo24HrsFormat("12:10AM")); // 00:10
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02
