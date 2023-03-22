require("dotenv").config();
const { setMessage } = require("./functions/setMessage");
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.post("/", async (req, res) => {
  const information = req.body;
  const newPrompt = setMessage(information);
  console.log(newPrompt);
  // try {
  //   const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: "hi",
  //     max_tokens: 500,
  //     temperature: 0,
  //   });
  //   console.log(response.data.choices[0].text);
  //   res.json({
  //     answer: response.data.choices[0].text,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
