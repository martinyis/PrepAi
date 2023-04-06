import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useTheme } from "@material-ui/core/styles";
import { TextField, TextareaAutosize } from "@material-ui/core";
import InputFiled from "../UI/InputFiled";

const InfoPanel = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    courseHeight: "",
    topic: "",
    notes: "",
    addInfo: "",
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
        border: theme.palette.border.primary,
        padding: {
          xs: theme.spacing(0.2),
          sm: theme.spacing(0.3),
          md: theme.spacing(0.4),
          xl: theme.spacing(0.5),
        },
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
          <Typography
            style={{
              paddingBottom: 10,
              paddingLeft: 10,
            }}
            variant="h3"
          >
            Course
          </Typography>
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
              marginBottom: 25,
              // border: "1px solid #0f2031",
              border: theme.palette.border.primary,
              transition:
                "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
              "&:hover": {
                borderColor: "#0f2031",
                borderRadius: 10,
              },
            }}
          />
          <Typography
            style={{
              paddingBottom: 10,
              paddingLeft: 10,
            }}
            variant="h3"
          >
            Topic
          </Typography>
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
              marginBottom: 25,
              // border: "1px solid #0f2031",
              border: theme.palette.border.primary,
              transition:
                "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
              "&:hover": {
                borderColor: "#0f2031",
                borderRadius: 10,
              },
            }}
          />
          <Typography
            style={{
              paddingBottom: 10,
              paddingLeft: 10,
            }}
            variant="h3"
          >
            Add your notes
          </Typography>
          <TextareaAutosize
            fullWidth
            minRows={9}
            maxRows={9}
            variant="outlined"
            id="notes-input"
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            style={{
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
              padding: 15,
              // border: "3px solid #0f2031",
              border: theme.palette.border.primary,
              color: "#496673",
              resize: "none",
            }}
          />
          <Typography
            style={{
              paddingBottom: 10,
              paddingLeft: 10,
            }}
            variant="h3"
          >
            Additional info
          </Typography>
          <TextareaAutosize
            fullWidth
            minRows={9}
            maxRows={9}
            variant="outlined"
            id="addInfo-input"
            label="AddInfo"
            name="addInfo"
            value={formData.addInfo}
            onChange={handleChange}
            style={{
              padding: 15,
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
              // border: "3px solid #0f2031",
              border: theme.palette.border.primary,
              color: "#496673",
              resize: "none",
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default InfoPanel;
