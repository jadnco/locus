/* @flow */

// Inspired by https://css-tricks.com/snippets/php/time-ago-function/
export function formatTime(timestamp: Date | string): string {
  let time: Date = new Date(timestamp);
  let now: Date = new Date();
  let interval: number = (now - time) / 1000;

  let i: number = 0;

  const periods: Array<string> = ['s', 'm', 'h', 'd', 'w', 'm', 'y'];
  const lengths: Array<number> = [60, 60, 24, 7, 4.35, 12];

  while (interval >= lengths[i] && i <= lengths.length) {
    interval = interval / lengths[i];

    i++;
  }

  interval = Math.round(interval);

  return interval + '' + periods[i];
}
