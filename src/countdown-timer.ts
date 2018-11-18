export class CountdownTimer {
  private startTime;

  constructor(startTime) {
    this.startTime = startTime;
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

  private totalElapsedSeconds(readTime) {
    return (readTime - this.startTime) / 1000
  }
}
