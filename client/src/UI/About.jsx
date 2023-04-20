import { Box, Typography } from "@material-ui/core";
import React from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Stack } from "@mui/material";

const aboutInfo = [
  {
    id: 1,
    title: "Who we are",
    desc: "Welcome to our website, a powerful tool designed to help students prepare for their exams, quizzes, and academic assessments.",
    icon: <FingerprintIcon sx={{ fontSize: "3rem", color: "#496673" }} />,
  },
  {
    id: 2,
    title: "How it works",
    desc: "Our website utilizes the cutting-edge OpenAI API to organize the data you provide and make it easy to prepare, allowing you to optimize your study time and perform better on your exams.",
    icon: <FlashOnIcon sx={{ fontSize: "3rem", color: "#496673" }} />,
  },
  {
    id: 3,
    title: "Offer",
    desc: "Our website offers a variety offeatures to help you prepare, including customizable quizzes, practice exams, study guides, and more.",
    icon: <LocalOfferIcon sx={{ fontSize: "3rem", color: "#496673" }} />,
  },
];

const DetailsCard = ({ title, desc, icon }) => {
  return (
    <Stack
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="10px"
      p="1rem"
      gap={2}
      sx={{
        textAlign: "center",
        flex: "1 1 300px",
        boxShadow: "0 0 0.25rem #496673",
      }}
    >
      <Stack display="flex" alignItems="center" gap={2}>
        <Typography variant="h3">{title}</Typography>
        {icon}
      </Stack>
      <Typography variant="caption">{desc}</Typography>
    </Stack>
  );
};

const About = () => {
  return (
    <Box
      style={{
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        marginTop: 100,
        backgroundColor: "rgb(14, 43, 61, 1)",
        borderRadius: "10px",
        padding: "20px 40px",
      }}
    >
      <Typography variant="h1">About</Typography>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={3}
        p="20px 0"
      >
        {aboutInfo?.map((item) => (
          <DetailsCard key={item.id} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default About;
