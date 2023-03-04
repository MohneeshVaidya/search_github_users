export const getChartData = (repo) => {
  const ht = {};
  repo.forEach(({ language, stargazers_count }) => {
    if (ht[language])
      ht[language] = {
        ...ht[language],
        value: ht[language].value + 1,
        stars: ht[language].stars + stargazers_count,
      };
    else if (language)
      ht[language] = { label: language, value: 1, stars: stargazers_count };
  });

  const arr = [];
  for (let x in ht) arr.push(ht[x]);
  return arr;
};
