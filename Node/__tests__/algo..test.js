const { getTextData } = require("../services/algoService")


test('GET /algorithm should return the text', async() => {
    const text = await getTextData();
    expect(typeof text).toBe("string");
    expect(text).toEqual("tfosMPxuL")
})