import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useTheme } from "@material-ui/core/styles";
import { TextField, TextareaAutosize } from "@material-ui/core";

const InfoPanel = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    course: "",
    topic: "",
    notes: "",
    addInfo: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setLocalInfo(formData);
  };
  const setLocalInfo = (data) => {
    let prepInformation = JSON.parse(localStorage.getItem("prep-information"));
    prepInformation["data"] = data;
    localStorage.setItem("prep-information", JSON.stringify(prepInformation));
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
            inputProps={{ maxLength: 50 }}
            fullWidth
            variant="outlined"
            id="course-height-input"
            label="Course Height"
            name="course"
            value={formData.course}
            onChange={handleChange}
            InputLabelProps={{
              style: {
                color: "#304855",
                fontSize: "15px",
              },
            }}
            style={{
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
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
            inputProps={{ maxLength: 60 }}
            fullWidth
            variant="outlined"
            id="topic-input"
            label="Topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            InputLabelProps={{
              style: {
                color: "#304855",
                fontSize: "15px",
              },
            }}
            style={{
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
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
            maxLength={3000}
            style={{
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
              padding: 15,
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
            maxLength={1000}
            style={{
              padding: 15,
              backgroundColor: "#0f2031",
              borderRadius: 6,
              marginBottom: 25,
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
