import React from "react";
import "./styles.scss";
import { Typography, Box } from "@mui/material";
import fb from "../assets/soci-icons/facebook.png";
import ig from "../assets/soci-icons/instagram.png";
import ln from "../assets/soci-icons/linkedin.png";
import tw from "../assets/soci-icons/twitter.png";
import contact from "../assets/contact.png";
import wb from "../assets/soci-icons/whatsapp.png";

const Contact = () => {
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
      <Box sx={{ margin: "0px 95px", paddingTop: "140px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontFamily: '"poppins",sans-serif' }}
          >
            Contact Number:{" "}
            <span style={{ color: "#FEB902" }}>+91 9363295500</span>{" "}
            (Call/WhatsApp)
          </Typography>
          <Box sx={{ width: "60%" }}>
            <Typography
              variant="p"
              sx={{
                color: "#CBCBCB",
                fontFamily: '"poppins",sans-serif',
              }}
            >
              For inquiries or assistance, reach us at the provided contact
              number. We look forward to serving you the best of Danjr Wedding
              Biriyani!
            </Typography>
          </Box>
          <hr style={{ width: "60%" }} />
          <Box
            sx={{
              zIndex: 1,
              position: "absolute",
              right: "20px",
              width: "40%",
              marginTop: "70px",
            }}
          >
            <img src={contact} alt="" style={{ width: "80%" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"poppins",sans-serif',
                fontWeight: "bolder",
                color: "#FEB902",
              }}
            >
              Contact us :
            </Typography>

            <Typography
              sx={{ fontFamily: '"poppins",sans-serif', color: "#C0C0C0" }}
            >
              <span
                style={{
                  fontFamily: '"League Spartan",sans-serif',
                  color: "#FEB902",
                }}
              >
                Email :
              </span>{" "}
              danjrweddingbiriyani@gmail.com
            </Typography>
            <Typography
              sx={{ fontFamily: '"poppins",sans-serif', color: "#C0C0C0" }}
            >
              <span
                style={{
                  fontFamily: '"League Spartan",sans-serif',
                  color: "#FEB902",
                }}
              >
                Phone no :
              </span>{" "}
              +91 9363295500
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <Box>
              <Typography
                sx={{ color: "#C0C0C0", fontFamily: '"poppins",sans-serif' }}
              >
                6, 1st Main Rd,
                <br /> Seevaram, Perungudi,
                <br /> Chennai, Tamil Nadu <br />
                600096
              </Typography>
            </Box>
            <Box sx={{ color: "#FEB902" }}>
              <ul
                style={{
                  color: "#FEB902",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: '"poppins",sans-serif',
                  gap: "20px",
                }}
              >
                <li>Privacy Policy</li>
                <li>Terms of Conditions</li>
              </ul>
            </Box>
          </Box>
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
      </Box>{" "}
    </Box>
  );
};

export default Contact;
