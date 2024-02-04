import React from "react";
import "./styles.scss";
import cb from "../assets/cb.png";
import eb from "../assets/eb.png";
import mb from "../assets/mb.png";
import contact from "../assets/contact.png";
import vidrev1 from "../assets/vidrev1.jpg";
import vidrev2 from "../assets/vidrev2.jpg";
import vidrev3 from "../assets/vidrev3.jpg";
import { Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import fb from "../assets/soci-icons/facebook.png";
import ig from "../assets/soci-icons/instagram.png";
import ln from "../assets/soci-icons/linkedin.png";
import tw from "../assets/soci-icons/twitter.png";
import wb from "../assets/soci-icons/whatsapp.png";
const menus = [
  {
    title: "Chicken",
    price: "395",
    imgs: cb,
  },
  {
    title: "Mutton",
    price: "495",
    imgs: mb,
  },
  {
    title: "Egg",
    price: "295",
    imgs: eb,
  },
];
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

const Home = () => {
  return (
    <>
      <div className="main-container" flex={1} sx={{ width: "600px" }}></div>
      <div className="whatsappbtn">
        <a
          href="https://wa.me/919363295500?text=Hi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wb} alt="" />
        </a>
      </div>

      {/* Home Page ------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: "200px",
          left: "95px",
          color: "#fff",
          fontFamily: "'Montserrat', sans-serif",
          flexDirection: "column",
          width: "600px",
          gap: "20px",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif;",
            fontSize: "64px",
            backgroundColor: "transparent",
            lineHeight: "96px",
          }}
        >
          <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
            Authentic
          </span>
          <br /> Firewood{" "}
          <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
            Biryanis
          </span>
          <br /> in Wedding Style
        </Typography>
        <Typography
          sx={{
            backgroundColor: "transparent",
            width: "400px",
            textAlign: "justify",
            fontFamily: "'poppins',sans-serif",
          }}
        >
          Discover the art of Viragu Aduppu Biryani, crafted in wedding style.
          Immerse yourself in authentic flavors, straight from our cloud kitchen
          to your table. A culinary ode to Tamil Nadu's taste buds
        </Typography>
        <button
          style={{
            fontFamily: "'poppins',sans-serif",

            width: "max-content",
            padding: "10px 25px",
            border: "3px solid #fff",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "30px",
            marginTop: "40px",
          }}
        >
          <a href="/menu" style={{ color: "#FEB902" }}>
            Order Now
          </a>
        </button>
      </Box>
      <Box sx={{ margin: "60px 0px" }}>
        {/* Menu Heading--------------------------------------------------------------- */}
        <Typography
          variant="h2"
          sx={{
            color: "#FEB902",
            textAlign: "center",
            margin: "60px",
            fontFamily: "'Poppins',sans-serif",
          }}
        >
          Biriyanis
        </Typography>
        {/* Home Menu---------------------------------------------------------------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "70px",
            margin: "60px 20px",
          }}
        >
          {menus.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={item.imgs} style={{ width: "200px" }} alt="" />

              <Box
                sx={{
                  backgroundImage: "linear-gradient(#000, #E5914F)",
                  display: "flex",
                  justifyContent: "center",
                  width: "max-content",
                  borderRadius: "50px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    width: "99%",
                    // padding: "30px 25px",
                    paddingBottom: "30px",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    margin: "1px",
                    borderRadius: "50px",
                  }}
                >
                  <Typography sx={{ color: "#fff" }}>
                    <span
                      style={{
                        color: "#FEB902",
                        fontFamily: "'poppins',sans-serif",
                        fontSize: "30px",
                      }}
                    >
                      {item.title}
                    </span>
                    <br />
                    <span
                      style={{
                        fontFamily: "'montserrat',sans-serif",
                        fontSize: "25px",
                      }}
                    >
                      Biryani Combo
                    </span>
                    <br />
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        width: "100px",
                        color: "#C0C0C0",
                      }}
                    >
                      Served with Egg,
                      <br /> Raitha, Bread Halwa,
                      <br /> Brinjal Gravy
                    </span>
                    <Box
                      sx={{
                        color: "#FEB902",
                        fontSize: "30px",
                        fontFamily: '"poppins",sans-serif',
                        marginTop: "20px",
                      }}
                    >
                      ₹{item.price}
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        {/* View More Button-------------------------------------------------------- */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a
            href="/menu"
            style={{
              fontFamily: "'poppins',sans-serif",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
              width: "max-content",
              padding: "10px 25px",
              border: "3px solid #fff",
              borderRadius: "10px",
              fontWeight: "bolder",
              color: "#FEB902",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: "25px" }}>
              View more
            </Typography>

            <KeyboardArrowDownIcon
              sx={{
                backgroundColor: "#FEB902",
                color: "#000",
                fontSize: "35px",
                borderRadius: "20px",
              }}
            />
          </a>
        </Box>
        {/* About us Section-------------------------------------------------------------- */}
        <Box sx={{ margin: "100px 95px" }} className="aboutimg">
          <Typography
            sx={{
              color: "#fff",
              display: "flex",
              gap: "10px",
              fontSize: "60px",
              fontWeight: "bolder",
              fontFamily: "'Poppins', sans-serif;",
            }}
          >
            About
            <span style={{ color: "#FEB902", backgroundColor: "transparent" }}>
              Us
            </span>
          </Typography>
          {/* <Box
            sx={{
              position: "absolute",
              right: "20px",
              width: "60%",
            }}
            className="aboutimg"
          >
            <img src={shop} />
          </Box> */}
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
            With a legacy rooted in tradition, our biryanis reflect the
            authentic flavors of a bygone era, carefully prepared in a
            contemporary cloud kitchen setting.
            <br />
            <br />
            Our commitment extends beyond culinary excellence; it's about
            sharing the joy of flavorful biryanis that transcend borders. Each
            plate is a testament to our dedication to quality, taste, and the
            cultural heritage of biryani-making.
            <br />
            <br />
            Driven by a love for the craft, Dan Jr's culinary journey unfolds in
            every biryani we serve, inviting you to savor the essence of
            tradition with each delicious bite. Welcome to Danjr Wedding
            Biriyani, where passion meets plate, and every meal is a celebration
            of timeless taste.
          </Typography>
        </Box>
        {/* Review Section -----------------------------------------------------------*/}
        <Box sx={{ margin: "100px 95px" }}>
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
                  "Danjr Wedding Biriyani exceeded expectations! The biryanis
                  were a delightful blend of authenticity and flavor. The online
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
        </Box>
      </Box>
    </>
  );
};

export default Home;
