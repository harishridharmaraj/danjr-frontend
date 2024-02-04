import React from "react";
import { Box, Typography } from "@mui/material";
// import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import "./styles.scss";

const navdata = [
  { title: "Home", link: "/" },
  { title: "Menu", link: "/menu" },
  { title: "About Us", link: "/about" },
  { title: "Reviews", link: "/reviews" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        gap: { xs: "30px", sm: "70px" },
        backgroundColor: "transparent",
        zIndex: 2,
      }}
    >
      <Box
        component="a"
        href="/"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <img src={logo} alt="logo" />

        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "bolder",
            color: "#fff",
            width: "max-content",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "transparent",
          }}
        >
          <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
            DAN JR{" "}
          </span>{" "}
          WEDDING BIRYANI
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          gap: "80px",
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        {navdata.map((item) => (
          <a
            href={item.link}
            key={item.link}
            style={{ backgroundColor: "transparent" }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "24px",
                backgroundColor: "transparent",
                fontFamily: "'League Spartan', sans-serif",
                cursor: "pointer",
              }}
              key={item.title}
            >
              {item.title}
            </Typography>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
