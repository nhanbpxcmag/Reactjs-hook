import React, { useContext } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <FormControlLabel
        control={<Switch />}
        label="Dark mode"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;
