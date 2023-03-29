import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { styles } from "./createpageStyle.js";
const CreatePrep = () => {
  const theme = useTheme();
  const [courseHeight, setCourseHeight] = useState("");

  const handleCourseHeightChange = (event) => {
    setCourseHeight(event.target.value);
  };

  return (
    <div>
      <Box sx={styles.root}>
        <Box className="info__panels" sx={styles.infoPanels}>
          <Box className="info_panels-panel" sx={styles.infoPanel}>
            <Typography variant="h4">Create Prep</Typography>
            <form>
              <Box sx={{ paddingBottom: theme.spacing(0) }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="course-height-input"
                  label="Course"
                  value={courseHeight}
                  onChange={handleCourseHeightChange}
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
