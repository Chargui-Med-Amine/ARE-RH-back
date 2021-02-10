const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5555;

const membres = require("./routes/membres");
const reunion = require("./routes/reunion");

// 0w4t3034RL730yZQ
mongoose.connect(
  "mongodb+srv://root:0w4t3034RL730yZQ@cluster0.i27xs.mongodb.net/root?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("error: ", err);
});

app.use(express.json());
app.use("/membres", membres);
app.use("/reunion", reunion);

app.listen(port, () => {
  console.log("the server is running on ", port);
});
