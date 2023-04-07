import React, { useState, useEffect } from "react";
import "./CheckboxColumn.css";
import { Typography } from "@material-ui/core";

function CheckBoxes(props) {
  const { sendValues } = props;
  const [checkedValues, setCheckedValues] = useState({
    overview: false,
    mainThesis: false,
    questions: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedValues({
      ...checkedValues,
      [event.target.name]: event.target.checked,
    });
  };
  //use effect to use sendValues
  useEffect(() => {
    sendValues(checkedValues);
  }, [checkedValues]);
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
          name="overview"
          checked={checkedValues.overview}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-column__text">Overview</span>
      </label>
      <label className="checkbox-column__item">
        <input
          type="checkbox"
          name="mainThesis"
          checked={checkedValues.mainThesis}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-column__text">Main Thesis</span>
      </label>
      <label className="checkbox-column__item">
        <input
          type="checkbox"
          name="questions"
          checked={checkedValues.questions}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox-column__text">Questions</span>
      </label>
    </div>
  );
}

export default CheckBoxes;
