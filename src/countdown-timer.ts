import { Duration } from '../src/duration';

export class CountdownTimer {
  private alottedSeconds;
  private pauseTime;
  private startTime;
  private state;

  constructor(alottedSeconds) {
    this.alottedSeconds = alottedSeconds;
  }

  public elapsedTime(readTime = new Date()) {
    let totalElapsedSeconds = this.totalElapsedSeconds(readTime);

    return new Duration(totalElapsedSeconds);
  }

  public remainingTime(readTime = new Date()) {
    let totalElapsedSeconds = this.totalElapsedSeconds(readTime),
        totalRemainingSeconds = this.alottedSeconds - totalElapsedSeconds;

    return new Duration(totalRemainingSeconds);
  }

  public alottedTime() {
    return new Duration(this.alottedSeconds);
  }

  public start(startTime = new Date()) {
    this.startTime = startTime;
    this.state = CountdownTimer.TimerStates.RUNNING;
  }

  public stop() {
    this.state = CountdownTimer.TimerStates.STOPPED;
  }

  public pause(pauseTime = new Date()) {
   this.pauseTime = pauseTime;
   this.state = CountdownTimer.TimerStates.PAUSED;
  }

  private totalElapsedSeconds(readTime) {
    switch (this.state) {
      case CountdownTimer.TimerStates.RUNNING:
        return this.diffSeconds(readTime, this.startTime);

      case CountdownTimer.TimerStates.PAUSED:
        return this.diffSeconds(this.pauseTime, this.startTime);

      case CountdownTimer.TimerStates.STOPPED:
        return 0;

      default:
        throw new Error('Invalid CountdownTimer state');
    }
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
