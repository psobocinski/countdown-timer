export class Duration {
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
