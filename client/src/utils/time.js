export function formatTime(totalInSec) {
    const seconds = twoDigitNum(totalInSec % 60);
    const totalMinutes = parseInt(totalInSec / 60);
    const minutes = twoDigitNum(totalMinutes % 60);
    const hours = twoDigitNum(parseInt(totalMinutes / 60));

    return `${hours}:${minutes}:${seconds}`;
}

function twoDigitNum(val) {
    const str = '' + val;

    return str.length === 1 ? '0' + str : str;
}