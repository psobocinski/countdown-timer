import { CountdownTimer } from '../src/countdown-timer';

describe('Countdown Timer', () => {
  let initialTime = new Date(2000, 0, 1, 0, 0, 0),
      timer = new CountdownTimer(initialTime);

  test('returns elapsed hours, minutes, and seconds', () => {
    let timeAfter1hr2mins3secs = new Date(2000, 0, 1, 1, 2, 3);

    expect(timer.elapsedTime(timeAfter1hr2mins3secs)).toEqual({
      hours: 1,
      minutes: 2,
      seconds: 3
    });
  });
});
