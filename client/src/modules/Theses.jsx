import { Box, Typography } from "@mui/material";

const Theses = (props) => {
  const { theses } = props;
  console.log(theses);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Typography
        variant="h2"
        align="center"
        style={{
          fontSize: "3rem",
        }}
      >
        Theses
      </Typography>
      {theses.map(
        (thesis, id) =>
          thesis && (
            <Typography
              variant="body1"
              style={{
                letterSpacing: "0.03rem",
                lineHeight: "2em",
                textAlign: "left",
                fontSize: "1.3rem",
              }}
            >
              {id + 1} {thesis}
            </Typography>
          )
      )}
    </Box>
  );
};

export default Theses;
