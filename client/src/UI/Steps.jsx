import { Typography } from "@material-ui/core";
import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import MouseIcon from '@mui/icons-material/Mouse';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Stack } from "@mui/material";


// @mui/lab
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';


const CustomizedTimeline = () => {
  return (
    <Timeline position="alternate" sx={{maxWidth:"1000px",width:{xs:"auto",sm:"500px",lg:"1000px"}}}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color:"#496673" }}
          align="right"
          variant="body1"
          color="text.secondary"
        >
          First Step
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot className="TimelineDot">
            <MouseIcon className="TimelineIcons"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="TimelineContent--right">
          <Typography>Click on the Create Button</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color:"#496673" }}
          variant="body2"
          color="text.secondary"
        >
          Second Step
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="TimelineDot" >
            <InsertCommentIcon className="TimelineIcons"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="TimelineContent--left">
          <Typography>Insert information about your course</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
         <TimelineOppositeContent
          sx={{ m: 'auto 0', color:"#496673" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Third Step
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot className="TimelineDot" >
            <SettingsIcon className="TimelineIcons"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="TimelineContent--right">
          <Typography>Pick options for getting a result</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color:"#496673" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Last Step
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot className="TimelineDot" >
            <PlayCircleFilledIcon className="TimelineIcons"/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className="TimelineContent--left">
          <Typography>Start your prep</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}



const Steps = () => {
  return (
    <Stack
      sx={{
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        marginTop: "80px",
        backgroundColor: "rgb(14, 43, 61, 1)",
        borderRadius: "10px",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h2">How to use?</Typography>
      <CustomizedTimeline/>
    </Stack>
  );
};

export default Steps;
