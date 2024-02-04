import React from "react";
import "./styles.scss";
import { Typography, Box } from "@mui/material";
import vidrev1 from "../assets/vidrev1.jpg";
import vidrev2 from "../assets/vidrev2.jpg";
import vidrev3 from "../assets/vidrev3.jpg";
import fb from "../assets/soci-icons/facebook.png";
import ig from "../assets/soci-icons/instagram.png";
import ln from "../assets/soci-icons/linkedin.png";
import tw from "../assets/soci-icons/twitter.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import wb from "../assets/soci-icons/whatsapp.png";

const vidrev = [
  {
    thumb: vidrev1,
    links: "https://www.instagram.com/p/Cy-tnbwvsj6/",
  },
  {
    thumb: vidrev2,
    links: "https://www.instagram.com/p/C1jyTH2IlfD/",
  },
  {
    thumb: vidrev3,
    links: "https://www.instagram.com/p/Cxzyrg8xomH/",
  },
];

const Review = () => {
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
      <Box sx={{ margin: "0px 95px", paddingTop: "120px" }}>
        <Typography
          sx={{
            color: "#fff",
            display: "flex",
            gap: "10px",
            fontSize: "60px",
            fontWeight: "bolder",
            fontFamily: "'Poppins', sans-serif;",
            marginBottom: "80px",
          }}
        >
          Hear it from our
          <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
            Customers
          </span>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          {vidrev.map((item) => (
            <Box
              key={item.id}
              sx={{
                border: "4px solid #FEB902",
                width: "max-content",
                borderRadius: "10px",
                position: "relative",
              }}
              className="videorev"
            >
              <a
                href={item.links}
                target="_blank"
                rel="noreferrer"
                style={{ position: "relative", display: "block" }}
              >
                <img
                  width="350px"
                  height="220px"
                  src={item.thumb}
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    opacity: 0.5,
                  }}
                />

                <button
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#FEB902",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <PlayCircleOutlineIcon
                    sx={{
                      fontSize: "60px",
                      backgroundColor: "transparent",
                    }}
                  />
                </button>
              </a>
            </Box>
          ))}
        </Box>
        <Box
          sx={{ display: "flex", marginTop: "20px", flexDirection: "column" }}
        >
          <Box
            sx={{
              border: "1px solid #FEB902",
              margin: "20px 60px",
              display: "flex",
              padding: "20px",
              gap: "15px",
              height: "90px",
            }}
          >
            <Box sx={{ margin: "10px" }}>
              <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                "Danjr Wedding Biriyani exceeded expectations! The biryanis were
                a delightful blend of authenticity and flavor. The online
                ordering process was seamless, and the delivery was prompt. A
                truly satisfying experience!"
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="p"
                sx={{
                  color: "#FEB902",
                  fontSize: "30px",
                  display: "block",
                  width: "130px",
                  fontFamily: '"montserrat",sans-serif',
                }}
              >
                -Gokul
              </Typography>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              border: "1px solid #fff",
              margin: "20px 60px",
              display: "flex",
              padding: "20px",
              gap: "15px",
              height: "90px",
            }}
          >
            <Box>
              <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                "What a find! The website design is user-friendly and visually
                appealing. The biryanis were a taste revelation – perfectly
                cooked and rich in flavor. The additional touches of raita,
                katta, and bread halwa made the meal unforgettable."
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="p"
                sx={{
                  color: "#FEB902",
                  fontSize: "30px",
                  display: "block",
                  width: "130px",
                  fontFamily: '"montserrat",sans-serif',
                }}
              >
                -Tharun
              </Typography>
            </Box>
          </Box>
        </Box>
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

export default Review;
