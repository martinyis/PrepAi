import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import CheckBoxes from "../UI/CheckBoxes";
import InputFiled from "../UI/InputFiled";
import StartButton from "../UI/StartButton";
import context from "../states/CheckBoxContext";

const SettingsPanel = (props) => {
  const {checkedValues,setCheckedValues}=useContext(context);
  const { handleSubmit } = props;
  const theme = useTheme();
  const [values, setValues] = useState({});
  const [numbers, setNumber] = useState([]);
  const getCheckBoxInfo = (values) => {
    setValues(values);
    setLocalInfo("options", values);
  };
  const setLocalInfo = (property, value) => {
    let prepInformation = JSON.parse(localStorage.getItem("prep-information"));
    prepInformation[property] = value;
    localStorage.setItem("prep-information", JSON.stringify(prepInformation));
  };
  const getInputNumber = (number, name) => {
    if (name === "thesis") {
      setNumber([number, numbers[1]]);
      setLocalInfo("numOfThesis", number);
    }
    if (name === "questions") {
      setNumber([numbers[0], number]);
      setLocalInfo("numOfQuestions", number);
    }
  };

  return (
    <>
  
      <Box
        className="info_panels-panel"
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          borderRadius: 6,
          border: theme.palette.border.primary,
          padding: {
            xs: theme.spacing(0.2),
            sm: theme.spacing(0.3),
            md: theme.spacing(0.4),
            xl: theme.spacing(0.5),
          },
        }}
      >
        <CheckBoxes sendValues={getCheckBoxInfo} />
      {checkedValues.mainThesis &&  <div>
        <Typography
          style={{
            paddingBottom: 10,
            paddingLeft: 10,
          }}
          variant="h3"
        >
          Number of thesis
        </Typography>
        <InputFiled name="thesis" sendNumber={getInputNumber} /> </div>  }
        {checkedValues.questions&&<div>
        <Typography
          style={{
            paddingBottom: 10,
            paddingLeft: 10,
          }}
          variant="h3"
        >
          Number of questions
        </Typography>
        <InputFiled name="questions" sendNumber={getInputNumber} />
        </div> }
        <div
          style={{
            maxWidth: "300px",
            margin: "0px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StartButton handleSubmit={handleSubmit} text={"CREATE PREP"} />
        </div>
      </Box>
     
    </>
  );
};

export default SettingsPanel;
