const axios = require('axios');

function findPopularRepos(query, numRecord, callback) {
  const instance = axios.create({
    baseURL: `https://api.github.com/`
  });
  instance.get(`search/repositories?q=${query}&sort=stars`)
    .then(res => {
      const repos = res.data.items;
      const slicedRepos = repos.slice(0, numRecord);
      callback(slicedRepos);
    })
    .catch(err => {
      console.error('リポジトリ情報が取得できませんでした:', err);
    });
};

findPopularRepos('python', 5, repos => {
  repos.forEach(({ name }) => console.log(name));
});