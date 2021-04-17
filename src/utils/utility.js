function changeTimeIntoMinHr(sec) {
  return sec / 60 > 59
    ? `${Math.floor(sec / 3600) + "h"} ${(sec % 3600) / 60}m`
    : sec / 60 + `m`;
}

const changeIntoDouble = () => {};

function convertSecIntoTime(sec) {
  if (sec < 59) {
    return `00:00:${sec < 10 ? `0${sec}` : sec}`;
  } else if (sec > 59 && sec < 3600) {
    return `00:${
      Math.floor(sec / 60) < 10
        ? `0${Math.floor(sec / 60)}`
        : Math.floor(sec / 60)
    }:${sec % 60 < 10 ? `0${sec % 60}` : sec % 60}`;
  } else if (sec >= 3600) {
    return `${Math.floor(sec / 3600)}:${Math.floor((sec % 3600) / 60)}:${
      (sec % 3600) % 60
    }`;
  }
}

export { changeTimeIntoMinHr, convertSecIntoTime };
