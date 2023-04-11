import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import InfoPanel from "../modules/InfoPanel";
import SettingsPanel from "../modules/SettingsPanel";
import FormControl from "@mui/material/FormControl";
const CreatePrep = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");
  const handleSubmit = async (e) => {
    console.log("starts");
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
          paddingBottom: 10,
          backgroundColor: theme.palette.background.default,
          height: "100%",
        }}
      >
        <Box
          className="info__panels"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 10,
              xl: 15,
            },
            display: "flex",
            gap: {
              xs: theme.spacing(0.3), // set gap to 2 for screen sizes below sm
              sm: theme.spacing(0.5), // set gap to 4 for screen sizes sm and up
              md: theme.spacing(1),
              lg: theme.spacing(1.5),
              xl: theme.spacing(2),
            },
            width: "100%",
            justifyContent: "center",
            height: "100%",
            flexDirection: {
              xs: "column", // set flex-direction to column for screen sizes below sm
              sm: "row",
              md: "row",
            },
          }}
        >
          <div>
            <Box sx={{ marginTop: 20 }}>
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
          <InfoPanel />
          <SettingsPanel />
        </Box>
      </Box>
    </div>
  );
};

export default CreatePrep;
