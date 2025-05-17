function seriesGenerate(a) {
  let seriesArray = [];

  for (let i = 0; i <=a; i++) {
    const oddValue = 2 * i - 1;

    if (oddValue > 0) {
      seriesArray.push(oddValue);
    }
  }
  console.log(seriesArray.join(","));
}

seriesGenerate(4);
