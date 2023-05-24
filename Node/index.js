const express = require("express");
const app = express();
const appRoutes = require('./routes/algo')

app.use(express.json());
require('dotenv').config()

app.use('/algorithm', appRoutes)


app.listen(process.env.PORT, () => {
  console.log("Server connected at port", process.env.PORT);
});
