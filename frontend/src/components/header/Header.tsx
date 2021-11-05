import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={style.root}>
      <div style={style.imageWrapper}>
        <img style={style.imgStyle} src={logo} alt="" />
        <div
          style={{ display: "flex", width: "70%", justifyContent: "flex-end" }}
        >
          <Link style={style.linkStyle} to="/">
            Jokes
          </Link>
          <Link style={style.linkStyle} to="/people">
            People
          </Link>
        </div>
      </div>
    </div>
  );
};

const style = {
  root: {
    height: "100px",
    background: "white",
    boxShadow: " 0px 4px 6px #000",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "10%",
  },
  linkStyle: {
    padding: "5px",
    margin: "5px",
  },
};

export default Header;
