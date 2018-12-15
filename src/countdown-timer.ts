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
  private alottedSeconds;
  private startTime;

  constructor(alottedSeconds, startTime = new Date()) {
    this.alottedSeconds = alottedSeconds;
    this.startTime = startTime;
  }

  public elapsedTime(readTime = new Date()) {
    let totalElapsedSeconds = this.totalElapsedSeconds(readTime);

    return new Duration(totalElapsedSeconds);
  }

  public remainingTime(readTime = new Date()) {
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
