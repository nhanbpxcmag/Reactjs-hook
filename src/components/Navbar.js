import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div className="navbar" style={style}>
      <h1>My hook App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuth ? "Đã đăng nhập " : ""}
          <Button variant="contained" onClick={toggleAuth}>
            {isAuth ? "Đăng xuất" : "Đăng nhập"}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
