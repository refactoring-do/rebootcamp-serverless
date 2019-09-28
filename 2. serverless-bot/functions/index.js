const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const quotesGenerator = require("./quotes");

const app = express();
app.use(cors({ origin: true }));

app.post("/", (req, res) => {
  const isValidMessage =
    req.body &&
    req.body.message &&
    req.body.message.chat &&
    req.body.message.chat.id &&
    req.body.message.from &&
    req.body.message.from.first_name;

  let message = "No entiendo nada!";
  let chat_id = null;

  if (isValidMessage) {
    chat_id = req.body.message.chat.id;
    const { first_name } = req.body.message.from;
    const { text } = req.body.message;

    switch (text) {
      case "Dime algo nuevo":
        message = quotesGenerator();
        break;
      default:
        message = `Chilling ${first_name}, viendo como conquitas el mundo con Serverless 🚀`;
    }
  }

  return res.status(200).send({
    method: "sendMessage",
    chat_id,
    text: message
  });
});

module.exports.router = functions.https.onRequest(app);
