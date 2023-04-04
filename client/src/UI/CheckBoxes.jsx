import React, { useState } from "react";
import "./CheckboxColumn.css";
import { Typography } from "@material-ui/core";
function CheckBoxes() {
  const [overviewChecked, setOverviewChecked] = useState(false);
  const [mainThesisChecked, setMainThesisChecked] = useState(false);
  const [questionsChecked, setQuestionsChecked] = useState(false);

  const handleOverviewChange = () => {
    setOverviewChecked(!overviewChecked);
  };

  const handleMainThesisChange = () => {
    setMainThesisChecked(!mainThesisChecked);
  };

  const handleQuestionsChange = () => {
    setQuestionsChecked(!questionsChecked);
  };

  return (
    <div className="checkbox-column">
      <Typography
        style={{
          paddingBottom: 10,
          paddingLeft: 10,
        }}
        variant="h3"
      >
        Options
      </Typography>
      <label className="checkbox-column__item">
        <input
          type="checkbox"
          checked={overviewChecked}
          onChange={handleOverviewChange}
        />
        <span className="checkbox-column__text">Overview</span>
      </label>
      <label className="checkbox-column__item">
        <input
          type="checkbox"
          checked={mainThesisChecked}
          onChange={handleMainThesisChange}
        />
        <span className="checkbox-column__text">Main Thesis</span>
      </label>
      <label className="checkbox-column__item">
        <input
          type="checkbox"
          checked={questionsChecked}
          onChange={handleQuestionsChange}
        />
        <span className="checkbox-column__text">Questions</span>
      </label>
    </div>
  );
}

export default CheckBoxes;
