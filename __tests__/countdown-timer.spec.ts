import { CountdownTimer } from '../src/countdown-timer';

describe('Countdown Timer', () => {
  let initialTime = new Date(2000, 0, 1, 0, 0, 0);

  describe('elapsedTime()', () => {
    test('returns elapsed hours, minutes, and seconds', () => {
      let timer = new CountdownTimer(10, initialTime),
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
      let timerFor75sec = new CountdownTimer(75, initialTime),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      expect(timerFor75sec.remainingTime(timeAfter10secs)).toEqual({
        hours: 0,
        minutes: 1,
        seconds: 5
      });
    });
  });

  describe('alottedTime()', () => {
    test('returns alotted hours, minutes, and seconds', () => {
      let timer = new CountdownTimer(3661);

      expect(timer.alottedTime()).toEqual({
        hours: 1,
        minutes: 1,
        seconds: 1
      });
    });
  });

  describe('stop()', () => {
    test('resets elapsedTime to zero', () => {
      let timer = new CountdownTimer(3661, initialTime),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      timer.stop();

      expect(timer.elapsedTime(timeAfter10secs)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    });

    test('resets remaining time to alotted time', () => {
      let timer = new CountdownTimer(3661, initialTime),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      timer.stop();

      expect(timer.remainingTime(timeAfter10secs)).toEqual(timer.alottedTime());
      expect(timer.remainingTime(timeAfter10secs)).toEqual({
        hours: 1,
        minutes: 1,
        seconds: 1
      });
    });
  });

  describe('pause()', () => {
    test('freezes elapsedTime at paused time', () => {
      let timer = new CountdownTimer(3661, initialTime),
          timeAfter5secs = new Date(2000, 0, 1, 0, 0, 5),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      timer.pause(timeAfter5secs);

      expect(timer.elapsedTime(timeAfter10secs)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 5
      });
    });

    test('freezes remainingTime at paused time', () => {
      let timer = new CountdownTimer(3660, initialTime),
          timeAfter5secs = new Date(2000, 0, 1, 0, 0, 5),
          timeAfter10secs = new Date(2000, 0, 1, 0, 0, 10);

      timer.pause(timeAfter5secs);

      expect(timer.remainingTime(timeAfter10secs)).toEqual({
        hours: 1,
        minutes: 0,
        seconds: 55
      });
    });
  });
});
