import { CountdownTimer } from '../src/countdown-timer';

describe('Countdown Timer', () => {
  let initialTime = new Date(2000, 0, 1, 0, 0, 0),
      timer = new CountdownTimer(initialTime);

  test('returns the elapsed seconds', () => {
    let timeAfterFiveSeconds = new Date(2000, 0, 1, 0, 0, 5);

    expect(timer.elapsedTime(timeAfterFiveSeconds).seconds).toEqual(5);
  });

  test('returns the elapsed minutes', () => {
    let timeAfterFiveMinutes = new Date(2000, 0, 1, 0, 5, 0);

    expect(timer.elapsedTime(timeAfterFiveMinutes).minutes).toEqual(5);
  });

  test('returns the elapsed hours', () => {
    let timeAfterFiveHours = new Date(2000, 0, 1, 5, 0, 0);

    expect(timer.elapsedTime(timeAfterFiveHours).hours).toEqual(5);
  });

  test('returns elapsed hours, minutes, and seconds', () => {
    let timeAfter1hr2mins3secs = new Date(2000, 0, 1, 1, 2, 3);

    expect(timer.elapsedTime(timeAfter1hr2mins3secs)).toEqual({
      hours: 1,
      minutes: 2,
      seconds: 3
    });
  });
});
