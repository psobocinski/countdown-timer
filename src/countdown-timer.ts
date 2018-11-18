export function CountdownTimer(startTime) {
  this.startTime = startTime;
  this.elapsedTime = (readTime) => {
    let totalElapsedSeconds = (readTime - startTime) / 1000,
      totalElapsedMinutes = totalElapsedSeconds / 60,
      totalElapsedHours = totalElapsedMinutes / 60,
      displayedElapsedHours = Math.floor(totalElapsedHours),
      displayedElapsedMinutes = Math.floor(totalElapsedMinutes % 60),
      displayedElapsedSeconds = Math.floor(totalElapsedSeconds % 60);

    return {
      hours: displayedElapsedHours,
      minutes: displayedElapsedMinutes,
      seconds: displayedElapsedSeconds
    }
  };
};
