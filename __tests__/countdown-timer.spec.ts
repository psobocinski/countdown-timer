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
      let timer = new CountdownTimer(3661, initialTime);

      expect(timer.alottedTime()).toEqual({
        hours: 1,
        minutes: 1,
        seconds: 1
      })
    })
  })
});
