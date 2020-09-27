import youtube from '../../api/youtube';

const useYouTube = () => {
  const youTube = (params, stateSetter) => {
    youtube
      .get('/search', {
        params,
      })
      .then((response) => {
        stateSetter(response.data.items);
      });
  };

  return { youTube };
};

export { useYouTube };
