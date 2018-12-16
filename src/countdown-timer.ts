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

    if (this.state === CountdownTimer.TimerStates.STOPPED)
      return new Duration(0);

    if (this.state === CountdownTimer.TimerStates.PAUSED) {
       totalElapsedSeconds = (this.pauseTime - this.startTime) / 1000;
    } else {
      totalElapsedSeconds = this.totalElapsedSeconds(readTime);
    }

    return new Duration(totalElapsedSeconds);
  }

  public remainingTime(readTime = new Date()) {
    let totalElapsedSeconds
    let totalRemainingSeconds;

    if (this.state === CountdownTimer.TimerStates.STOPPED)
      return this.alottedTime();

    if (this.state === CountdownTimer.TimerStates.PAUSED) {
      totalElapsedSeconds = (this.pauseTime - this.startTime) / 1000;
      totalRemainingSeconds = this.alottedSeconds - totalElapsedSeconds;
    } else {
      totalRemainingSeconds = this.totalRemainingSeconds(readTime);
    }

    return new Duration(totalRemainingSeconds);
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

  private totalRemainingSeconds(readTime) {
    return this.alottedSeconds - this.totalElapsedSeconds(readTime);
  }

  private totalElapsedSeconds(readTime) {
    return (readTime - this.startTime) / 1000
  }

  static TimerStates = class {
    static PAUSED = Symbol('paused');
    static RUNNING = Symbol('started');
    static STOPPED = Symbol('stopped');
  }
}
