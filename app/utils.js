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

// http://stackoverflow.com/a/10600491
export function formatNumber(number: number): string {
  let round: (n: number, precision: number) => number = (n, precision) => {
    let prec = Math.pow(10, precision);

    return Math.round(n * prec) / prec;
  };

  let format: (n: number) => string = n => {
    let base = Math.floor(Math.log(Math.abs(n)) / Math.log(1000));
    let suffix = 'KMB'[base - 1];

    return suffix ? round(n / Math.pow(1000, base), 2) + suffix : '' + n;
  };

  return format(number);
}
