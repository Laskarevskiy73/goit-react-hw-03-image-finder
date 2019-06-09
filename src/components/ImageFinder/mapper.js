const mapper = hits => {
  return hits.map(hit => {
    const {
      id,
      webformatURL: smallImage,
      largeImageURL: largeImage,
      views,
      comments,
      downloads,
      likes,
    } = hit;

    return {
      id,
      smallImage,
      largeImage,
      views,
      comments,
      downloads,
      likes,
    };
  });
};

export default mapper;
