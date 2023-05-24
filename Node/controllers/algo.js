const { getTextData } = require("../services/algoService");

const algoController = async (req, res) => {
  try {

    let text = await getTextData();

    res.status(200).json({ status: 200, text: text });
  } catch (err) {
    res.status(400).json({ status: 400, err: err.message });
  }
};



module.exports = { algoController }