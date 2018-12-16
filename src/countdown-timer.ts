import { Duration } from '../src/duration';

export class CountdownTimer {
  private alottedSeconds;
  private startTime;
  private state;

  constructor(alottedSeconds, startTime = new Date()) {
    this.alottedSeconds = alottedSeconds;
    this.startTime = startTime;
    this.state = CountdownTimer.TimerStates.RUNNING;
  }

  public elapsedTime(readTime = new Date()) {
    if (this.state === CountdownTimer.TimerStates.STOPPED)
      return new Duration(0);

    let totalElapsedSeconds = this.totalElapsedSeconds(readTime);

    return new Duration(totalElapsedSeconds);
  }

  public remainingTime(readTime = new Date()) {
    if (this.state === CountdownTimer.TimerStates.STOPPED)
      return this.alottedTime();

    let totalRemainingSeconds = this.totalRemainingSeconds(readTime);;

    return new Duration(totalRemainingSeconds);
  }

  public alottedTime() {
    return new Duration(this.alottedSeconds);
  }

  public stop() {
    this.state = CountdownTimer.TimerStates.STOPPED;
  }

  private totalRemainingSeconds(readTime) {
    return this.alottedSeconds - this.totalElapsedSeconds(readTime);
  }

  private totalElapsedSeconds(readTime) {
    return (readTime - this.startTime) / 1000
  }

  static TimerStates = class {
    static RUNNING = Symbol('running');
    static STOPPED = Symbol('stopped');
  }
}
