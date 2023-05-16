let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { characterId } = req.params;
  myFavorites.splice(myFavorites.findIndex(fav => fav.characterId === +characterId), 1);
  return res.status(200).json(myFavorites);
};



module.exports = {
  postFav,
  deleteFav,
};
