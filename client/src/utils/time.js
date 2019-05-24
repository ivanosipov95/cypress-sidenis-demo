export function formatTime(totalInSec) {
    const seconds = totalInSec % 60;
    const totalMinutes = parseInt(totalInSec / 60);
    const minutes = totalMinutes % 60;
    const hours = parseInt(totalMinutes / 60);

    return `${hours}:${minutes}:${seconds}`;
}