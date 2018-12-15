export class CountdownTimer {
  private startTime;
  private alottedSeconds;

  constructor(startTime, alottedSeconds = null) {
    this.startTime = startTime;
    this.alottedSeconds = alottedSeconds;
  }

  public elapsedTime(readTime) {
    let totalElapsedSeconds = this.totalElapsedSeconds(readTime),
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
  }

  public remainingTime(readTime) {
    if (!this.alottedSeconds) return null;

    let totalRemainingSeconds = this.alottedSeconds - this.totalElapsedSeconds(readTime),
        totalRemainingMinutes = totalRemainingSeconds / 60,
        totalRemainingHours = totalRemainingMinutes / 60,
        displayedRemainingHours = Math.floor(totalRemainingHours),
        displayedRemainingMinutes = Math.floor(totalRemainingMinutes % 60),
        displayedRemainingSeconds = Math.floor(totalRemainingSeconds % 60);

    return {
      hours: displayedRemainingHours,
      minutes: displayedRemainingMinutes,
      seconds: displayedRemainingSeconds
    }
  }

  private totalElapsedSeconds(readTime) {
    return (readTime - this.startTime) / 1000
  }
}
