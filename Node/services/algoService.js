const axios = require("axios");
const envConstants = require("../constants/env.constants");

const getTextData = async () => {
    console.log(process.env)
    const resData = await axios.get(process.env.PYTHON_BASE_URL ? `${process.env.PYTHON_BASE_URL}/algorithm`:`${envConstants.PYTHON_BASE_URL}/algorithm`);
    const str = resData.data.text;
    let newStr = "";
    for (let ch of str) {
      if ((ch > "a" && ch < "z") || (ch > "A" && ch < "Z")) {
        newStr = ch + newStr;
      }
    }

    return newStr;
}

module.exports = { getTextData }