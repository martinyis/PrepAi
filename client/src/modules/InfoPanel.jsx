import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField, TextareaAutosize } from "@material-ui/core";
const InfoPanel = () => {
  const theme = useTheme();
  const [courseHeight, setCourseHeight] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const handleCourseHeightChange = (event) => {
    setCourseHeight(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleRequirementsChange = (event) => {
    setRequirements(event.target.value);
  };
  return (
    <>
      <Box
        className="info_panels-panel"
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          borderRadius: 6,
          padding: theme.spacing(0.5),
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <form>
          <Box
            sx={{
              paddingBottom: theme.spacing(0),
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              id="course-height-input"
              label="Course Height"
              value={courseHeight}
              onChange={handleCourseHeightChange}
              style={{
                backgroundColor: "#0f2031",
                borderRadius: 6,
                marginTop: 35,
                border: "1px solid #0f2031",
                transition:
                  "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#0f2031",
                  borderRadius: 10,
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              id="topic-input"
              label="Topic"
              value={topic}
              onChange={handleTopicChange}
              style={{
                backgroundColor: "#0f2031",
                borderRadius: 6,
                marginTop: 35,
                border: "1px solid #0f2031",
                transition:
                  "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#0f2031",
                  borderRadius: 10,
                },
              }}
            />
            <TextareaAutosize
              fullWidth
              minRows={9}
              maxRows={9}
              variant="outlined"
              id="description-input"
              label="Description"
              value={description}
              onChange={handleDescriptionChange}
              style={{
                backgroundColor: "#0f2031",
                borderRadius: 6,
                marginTop: 35,
                border: "1px solid #0f2031",
                transition:
                  "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#0f2031",
                  borderRadius: 10,
                },
              }}
            />
            <TextareaAutosize
              fullWidth
              minRows={9}
              maxRows={9}
              variant="outlined"
              id="requirements-input"
              label="Requirements"
              value={requirements}
              onChange={handleRequirementsChange}
              style={{
                backgroundColor: "#0f2031",
                borderRadius: 6,
                marginTop: 35,
                border: "1px solid #0f2031",
                transition:
                  "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#0f2031",
                  borderRadius: 10,
                },
              }}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default InfoPanel;
