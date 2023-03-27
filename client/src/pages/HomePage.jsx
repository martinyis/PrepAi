import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";

const HomePage = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue: inputValue }),
    });
    const data = await response.json();
    console.log(data.answer);
    setInputValue("");
    setAnswer(data.answer);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setInputValue("");
      handleSubmit(e);
    }
  };

  return (
    <div>
      <Box
        sx={{
          paddingTop: 20,
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        }}
      >
        <FormControl>
          <Typography variant="h4">{answer}</Typography>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default HomePage;
