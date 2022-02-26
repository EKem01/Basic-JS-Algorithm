function divisible(a) {
  let length = a.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (a[i] > 15 && a[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
divisible([2, 3, 12, 18, 42, 24]);
divisible([100, 84, 37]);
divisible([5, 8, 6, 12]);

module.exports = divisible;
