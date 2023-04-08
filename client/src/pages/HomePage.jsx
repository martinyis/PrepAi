import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import About from "../UI/About";
import Steps from "../UI/Steps";
import CreateButton from "../UI/CreateButton";
const HomePage = () => {
  const theme = useTheme();
  // const [inputValue, setInputValue] = useState("");
  // const [answer, setAnswer] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ inputValue: inputValue }),
  //   });
  //   const data = await response.json();
  //   console.log(data.answer);
  //   setInputValue("");
  //   setAnswer(data.answer);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.keyCode === 13) {
  //     setInputValue("");
  //     handleSubmit(e);
  //   }
  // };

  return (
    <div>
      <Box
        sx={{
          paddingTop: 20,
          backgroundColor: theme.palette.background.default,
          height: "100%",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 10,
            xl: 15,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <About />
        <Steps />
        <CreateButton />
      </Box>
    </div>
  );
};

export default HomePage;
