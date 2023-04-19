import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    maxWidth: "1000px",
    width: "100%",
    margin: "0 auto",
    marginTop: 100,
    backgroundColor: "#F2F2F2",
    borderRadius: "10px",
    padding: "20px",
  },
  aboutTitle: {
    fontWeight: "bold",
    fontSize: "3rem",
    marginBottom: "2rem",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  aboutText: {
    letterSpacing: "0.05rem",
    lineHeight: "1.5",
    fontSize: "1.2rem",
    textAlign: "justify",
    color: "#444",
    marginTop: "2rem",
  },
  aboutImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  aboutImage: {
    height: "auto",
    width: "80%",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h1" className={classes.aboutTitle}>
        About
      </Typography>
      <Typography variant="body1" className={classes.aboutText}>
        At our website, we believe that studying should be an engaging and
        rewarding experience. That's why we've created a platform that leverages
        the power of cutting-edge technologies to help students prepare for
        their exams and quizzes with ease. Our platform uses the OpenAI API to
        analyze the data you provide and create customized quizzes, practice
        exams, and study guides that cater to your unique learning style. We
        believe that with the right tools and resources, anyone can achieve
        their academic goals.
      </Typography>
      <div className={classes.aboutImageContainer}>
        <img
          // src="https://picsum.photos/800/600"
          alt="Students studying"
          className={classes.aboutImage}
        />
      </div>
    </div>
  );
};

export default About;
