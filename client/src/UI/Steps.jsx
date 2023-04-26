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
import TimelineDot from '@mui/lab/TimelineDot';

const timelineContent = [
  {
    id:10,
    title:"Click on the Create Button",
    Icon: MouseIcon
  },
  {
    id:11,
    title:"Insert information about your course",
    Icon: InsertCommentIcon
  },
  {
    id:12,
    title:"Pick options for getting a result",
    Icon: SettingsIcon
  },
  {
    id:13,
    title:"Start your prep",
    Icon: PlayCircleFilledIcon
  },
];


const TimeLineItem = ({ title, Icon, index }) => {
  return (
    <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className="TimelineDot">
            <Icon className="TimelineIcons"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={`TimelineContent--${index === 0 || index === 2 ? "right" : "left"}`}>
          <Typography>{title}</Typography>
        </TimelineContent>
      </TimelineItem>
  )
};



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
      <Timeline position="alternate" sx={{ maxWidth:"1000px", width:{xs:"auto", sm:"500px", lg:"1000px" }}}>
      {timelineContent?.map((item,index) => <TimeLineItem key={item.id} {...item} index={index} />)}
      </Timeline>
    </Stack>
  );
};

export default Steps;
