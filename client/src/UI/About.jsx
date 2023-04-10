import { Typography } from "@material-ui/core";
import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
        marginTop: 100,
        backgroundColor: "rgb(14, 43, 61, 1)",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Typography variant="h1">About</Typography>
      <Typography
        variant="caption"
        style={{
          //letter spacing
          letterSpacing: "0.05rem",
          //line spacing
          lineHeight: "2.5em",
          //center text
          textAlign: "right",
        }}
      >
        Welcome to our website, a powerful tool designed to help students
        prepare for their exams, quizzes, and academic assessments. Our website
        utilizes the cutting-edge OpenAI API to organize the data you provide
        and make it easy to prepare, allowing you to optimize your study time
        and perform better on your exams. Our website offers a variety of
        features to help you prepare, including customizable quizzes, practice
        exams, study guides, and more.
      </Typography>
    </div>
  );
};

export default About;
