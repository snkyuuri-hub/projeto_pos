import model from "../../model/index.js";

const getOne = async (id) => {
  try {
    const filme = await model.Filme.findOne({
      where: { id: id }
    });

    if (!filme) {
      return false;
    }

    return filme;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getOne;