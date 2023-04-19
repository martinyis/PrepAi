function setMessage(obj) {
  const { course, topic, notes } = obj.data;
  const { numOfThesis, numOfQuestions } = obj;
  const prototype = `{
    "overview": "",
    "thesis": [
      "",
      "",
      "",
      "",
      ""
    ],
    "questions": [
      {
        "question": "",
        "answer": ""
      }
    ]
  }`;
  let addInfo =
    obj.data.addInfo == "" ? "" : `additional info - \"${obj.data.addInfo}\"`;
  console.log(course);
  let overview = obj.options.overview
    ? '"overwiev"- overwiev about the exams based on info,'
    : "";
  let thesis =
    numOfThesis == 0
      ? ""
      : `\"thesis\"- it is array with ${numOfThesis} main thesis,`;
  let questions =
    numOfQuestions == 0
      ? ""
      : `\"questions\"- it is an object with with ${numOfQuestions} questions and answers to those questions,`;

  //general prompt
  let prompt = `Hi ChatGpt, I want you to help me with preperation to my ${course} exam. Your task is to give me a json objext with different properties based on info I will provide below\nProperties: (${overview} ${thesis} ${questions}\nInfo: (course name - ${course}, topic - ${topic}, notes - \"${notes}\", ${addInfo} ). Here is prototype ${prototype}`;
  return prompt;
}

//export fucntion
module.exports = { setMessage };
