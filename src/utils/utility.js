function changeTimeIntoMinHr(sec) {
  return sec / 60 > 59
    ? `${Math.floor(sec / 3600) + "h"} ${(sec % 3600) / 60}m`
    : sec / 60 + `m`;
}

export { changeTimeIntoMinHr };
