function generateConditionalSeries(a) {
  let count = a % 2 === 0 ? a - 1 : a;
  let seriesArray = [];

  for (let i = 0; i <= count; i++) {
    let oddValue = 2 * i - 1;

    if (oddValue > 0) {
      seriesArray.push(2 * i - 1);
    }
  }
  console.log(seriesArray.join(","));
}

generateConditionalSeries(5);
generateConditionalSeries(6);
