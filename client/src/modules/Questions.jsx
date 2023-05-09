import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = (props) => {
  const { questions } = props;
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        style={{
          fontSize: "3rem",
        }}
      >
        Questions
      </Typography>
      {questions.map((question, id) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {id + 1} {question.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Questions;
