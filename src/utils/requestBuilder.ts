const requestBuilder = (url: string) => {
  return fetch(`${process.env.GITHUB_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'pplication/vnd.github+json',
    },
  }).then((rsp) => rsp.json());
};

export default requestBuilder;
