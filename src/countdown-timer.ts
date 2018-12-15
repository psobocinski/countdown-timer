class Duration {
  public hours;
  public minutes;
  public seconds;

  constructor(totalSeconds) {
    let totalMinutes = totalSeconds / 60,
        totalHours = totalMinutes / 60;

    this.hours = Math.floor(totalHours);
    this.minutes = Math.floor(totalMinutes % 60);
    this.seconds = Math.floor(totalSeconds % 60);
  }
}

export class CountdownTimer {
  private startTime;
  private alottedSeconds;

  constructor(startTime, alottedSeconds = null) {
    this.startTime = startTime;
    this.alottedSeconds = alottedSeconds;
  }

  public elapsedTime(readTime) {
    let totalElapsedSeconds = this.totalElapsedSeconds(readTime);

    return new Duration(totalElapsedSeconds);
  }

  public remainingTime(readTime) {
    if (!this.alottedSeconds) return null;

    let totalRemainingSeconds = this.totalRemainingSeconds(readTime);;

    return new Duration(totalRemainingSeconds);
  }

  public alottedTime() {
    return new Duration(this.alottedSeconds);
  }

  private totalRemainingSeconds(readTime) {
    return this.alottedSeconds - this.totalElapsedSeconds(readTime);
  }

  private totalElapsedSeconds(readTime) {
    return (readTime - this.startTime) / 1000
  }
}
