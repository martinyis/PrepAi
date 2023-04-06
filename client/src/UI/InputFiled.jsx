import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const numbers = Array.from(Array(20).keys()).map((n) => n + 1);

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function SingleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-single-name-label">Number</InputLabel>
        <Select
          labelId="demo-single-name-label"
          id="demo-single-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Number" />}
          MenuProps={MenuProps}
          style={{
            backgroundColor: "#0f2031",
            borderRadius: 6,
            marginBottom: 25,
            // border: "1px solid #0f2031",
            border: "1px solid #0f4f5f",
            transition:
              "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
            "&:hover": {
              borderColor: "#0f2031",
              borderRadius: 10,
            },
          }}
        >
          {numbers.map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
