const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.log("failed to connect: ");
      console.log(err);
    });
};
module.exports = connect;