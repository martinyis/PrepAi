const { Configuration, OpenAIApi } = require("openai");
//import key from .env
const express = require("express");
const configuration = new Configuration({
  organization: "org-rbaMvLZLKC7vPLKOY0myB4SQ",
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
  const { inputValue } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${inputValue}`,
      max_tokens: 500,
      temperature: 0,
    });
    res.json({
      answer: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.json({ answer: "Sorry, something went wrong." });
    console.log(inputValue);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
