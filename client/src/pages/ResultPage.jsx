import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import ResultView from "../modules/ResultView";
import { result } from "../result-test.js";
import Theses from "../modules/Theses";
import Questions from "../modules/Questions";
const ResultPage = () => {
  const [overviewText, setOverviewText] = useState("");
  const [thesis, setThesis] = useState([]);
  const [questions, setQuestions] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    const overview = result.overview;
    const thesis = result.thesis;
    const questions = result.questions;
    setOverviewText(overview);
    setThesis(thesis);
    setQuestions(questions);
  }, []);

  return (
    <div>
      <Box
        sx={{
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: theme.palette.background.default,
          height: "100%",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 10,
            xl: 15,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <ResultView overviewText={overviewText} />
        <Theses theses={thesis} />
        <Questions questions={questions} />
      </Box>
    </div>
  );
};

export default ResultPage;
