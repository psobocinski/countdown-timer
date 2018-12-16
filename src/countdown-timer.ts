import { Duration } from '../src/duration';

export class CountdownTimer {
  private alottedSeconds;
  private pauseTime;
  private startTime;
  private state;

  constructor(alottedSeconds, startTime = new Date()) {
    this.alottedSeconds = alottedSeconds;
    this.startTime = startTime;
    this.state = CountdownTimer.TimerStates.RUNNING;
  }

  public elapsedTime(readTime = new Date()) {
    let totalElapsedSeconds;

    switch (this.state) {
      case CountdownTimer.TimerStates.RUNNING:
        totalElapsedSeconds = this.diffSeconds(readTime, this.startTime);
        return new Duration(totalElapsedSeconds);

      case CountdownTimer.TimerStates.PAUSED:
        totalElapsedSeconds = this.diffSeconds(this.pauseTime, this.startTime);
        return new Duration(totalElapsedSeconds);

      case CountdownTimer.TimerStates.STOPPED:
        return new Duration(0);

      default:
        throw new Error('Invalid CountdownTimer state');
    }
  }

  public remainingTime(readTime = new Date()) {
    let totalElapsedSeconds,
        totalRemainingSeconds;

    switch (this.state) {
      case CountdownTimer.TimerStates.RUNNING:
        totalElapsedSeconds = this.diffSeconds(readTime, this.startTime);
        totalRemainingSeconds = this.alottedSeconds - totalElapsedSeconds;
        return new Duration(totalRemainingSeconds);

      case CountdownTimer.TimerStates.PAUSED:
        totalElapsedSeconds = this.diffSeconds(this.pauseTime, this.startTime);
        totalRemainingSeconds = this.alottedSeconds - totalElapsedSeconds;
        return new Duration(totalRemainingSeconds);

      case CountdownTimer.TimerStates.STOPPED:
        return this.alottedTime();

      default:
        throw new Error('Invalid CountdownTimer state');
    }
  }

  public alottedTime() {
    return new Duration(this.alottedSeconds);
  }

  public stop() {
    this.state = CountdownTimer.TimerStates.STOPPED;
  }

  public pause(pauseTime = new Date()) {
   this.pauseTime = pauseTime;
   this.state = CountdownTimer.TimerStates.PAUSED;
  }

  private diffSeconds(time1, time2) {
    return (time1 - time2) / 1000;
  }

  static TimerStates = class {
    static PAUSED = Symbol('paused');
    static RUNNING = Symbol('started');
    static STOPPED = Symbol('stopped');
  }
}
