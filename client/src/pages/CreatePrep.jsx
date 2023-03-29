import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { styles } from "./createpageStyle.js";

const CreatePrep = () => {
  const theme = useTheme();
  const [courseHeight, setCourseHeight] = useState("");
  const [topic, setTopic] = useState("");

  const handleCourseHeightChange = (event) => {
    setCourseHeight(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <div>
      <Box sx={styles.root}>
        <Box className="info__panels" sx={styles.infoPanels}>
          <Box className="info_panels-panel" sx={styles.infoPanel}>
            <form>
              <Box sx={{ paddingBottom: theme.spacing(0) }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="course-height-input"
                  label="Course Height"
                  value={courseHeight}
                  onChange={handleCourseHeightChange}
                  style={styles.panelInput}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  id="topic-input"
                  label="Topic"
                  value={topic}
                  onChange={handleTopicChange}
                  style={styles.panelInput}
                />
              </Box>
            </form>
          </Box>
          <Box
            className="info_panels-panel"
            sx={{
              backgroundColor: theme.palette.background.paper,
              width: "100%",
              borderRadius: 6,
            }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreatePrep;
