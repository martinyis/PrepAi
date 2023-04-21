import { Typography } from "@material-ui/core";
import React from "react";

const Steps = () => {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Typography variant="h2">How to use?</Typography>
      <div style={{ color: "#888" }} className="steps">

        <div className="checkpoint">
          <div>
          <Typography variant="h4">1. Click on the Create Button</Typography>
            <Typography variant="caption">or go to Create prep</Typography>
          </div>
        </div>

        <div className="checkpoint">
          <div>
          <Typography variant="h4">2. Insert information about your course</Typography>
            <Typography variant="caption">Input your Course, Topics, Notes etc</Typography>
          </div>
        </div>

        <div className="checkpoint">
          <div>
          <Typography variant="h4">3. Pick options for getting a result</Typography>
            <Typography variant="caption">Select your number of questions and thesis etc</Typography>
          </div>
        </div>

        <div className="checkpoint">
          <div>
          <Typography variant="h4">4. Start your prep</Typography>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Steps;
