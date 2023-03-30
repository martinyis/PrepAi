import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useTheme } from "@material-ui/core/styles";
import { TextField, TextareaAutosize } from "@material-ui/core";

const InfoPanel = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    courseHeight: "",
    topic: "",
    description: "",
    requirements: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
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
            name="courseHeight"
            value={formData.courseHeight}
            onChange={handleChange}
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
            name="topic"
            value={formData.topic}
            onChange={handleChange}
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
            name="description"
            value={formData.description}
            onChange={handleChange}
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
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
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
  );
};

export default InfoPanel;
