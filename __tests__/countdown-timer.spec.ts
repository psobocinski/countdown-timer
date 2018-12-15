import { CountdownTimer } from '../src/countdown-timer';

describe('Countdown Timer', () => {
  let initialTime = new Date(2000, 0, 1, 0, 0, 0);

  describe('elapsedTime()', () => {
    test('returns elapsed hours, minutes, and seconds', () => {
      let timer = new CountdownTimer(initialTime),
          timeAfter1hr2mins3secs = new Date(2000, 0, 1, 1, 2, 3);

      expect(timer.elapsedTime(timeAfter1hr2mins3secs)).toEqual({
        hours: 1,
        minutes: 2,
        seconds: 3
      });
    });
  });

  describe('remainingTime()', () => {
    test('returns remaining hours, minutes, and seconds', () => {
      let timerFor75sec = new CountdownTimer(initialTime, 75),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      expect(timerFor75sec.remainingTime(timeAfter10secs)).toEqual({
        hours: 0,
        minutes: 1,
        seconds: 5
      });
    });

    test('returns null when timer is initialized without alottedSeconds',() => {
      let timer = new CountdownTimer(initialTime);

      expect(timer.remainingTime(new Date())).toEqual(null);
    });
  });
});
