import React from "react";
import "./styles.scss";
import { Typography, Box } from "@mui/material";
import fb from "../assets/soci-icons/facebook.png";
import ig from "../assets/soci-icons/instagram.png";
import ln from "../assets/soci-icons/linkedin.png";
import tw from "../assets/soci-icons/twitter.png";

import wb from "../assets/soci-icons/whatsapp.png";

const About = () => {
  return (
    <Box>
      <div className="whatsappbtn">
        <a
          href="https://wa.me/919363295500?text=Hi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wb} alt="" />
        </a>
      </div>
      {/* About us Section-------------------------------------------------------------- */}
      <Box
        className="aboutimg"
        sx={{ paddingTop: "120px", margin: "0px 95px" }}
      >
        <Typography
          sx={{
            color: "#fff",
            display: "flex",
            gap: "10px",
            fontSize: "60px",
            fontWeight: "bolder",
            fontFamily: "'Poppins', sans-serif;",
            backgroundColor: "transparent",
          }}
        >
          About
          <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
            Us
          </span>
        </Typography>

        <Typography
          style={{
            color: "#fff",
            backgroundColor: "transparent",
            width: "70%",
            textAlign: "justify",
            fontSize: "24px",
            zIndex: 1,
            marginTop: "20px",
          }}
        >
          At the heart of{" "}
          <span style={{ color: "red", backgroundColor: "transparent" }}>
            Danjr Wedding Biryani
          </span>{" "}
          is the vision of Dan Jr who is a youtuber having 2.4M+ subscribers,
          blending passion and expertise to redefine your biryani experience.
          With a legacy rooted in tradition, our biryanis reflect the authentic
          flavors of a bygone era, carefully prepared in a contemporary cloud
          kitchen setting.
          <br />
          <br />
          Our commitment extends beyond culinary excellence; it's about sharing
          the joy of flavorful biryanis that transcend borders. Each plate is a
          testament to our dedication to quality, taste, and the cultural
          heritage of biryani-making.
          <br />
          <br />
          Driven by a love for the craft, Dan Jr's culinary journey unfolds in
          every biryani we serve, inviting you to savor the essence of tradition
          with each delicious bite. Welcome to Danjr Wedding Biriyani, where
          passion meets plate, and every meal is a celebration of timeless
          taste.
        </Typography>
      </Box>

      {/* Contact Section-------------------------------------------------------- */}
      <Box sx={{ margin: "100px 95px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 50px",
            }}
          >
            <Typography sx={{ color: "#fff" }}>
              © Dan Jr Wedding Biriyani 2024
            </Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <a href="/fb">
                <img
                  src={fb}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="/ig">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="/ln">
                <img
                  src={ln}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="/tw">
                <img
                  src={tw}
                  alt=""
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#FFF",
                    borderRadius: "50px",
                  }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
