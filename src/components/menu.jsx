import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import "./styles.scss";
import cb from "../assets/cb.png";
import eb from "../assets/eb.png";
import mb from "../assets/mb.png";
import c65 from "../assets/c65.png";
import bh from "../assets/bh.png";
import fr from "../assets/fr.png";
import bg from "../assets/bg.png";
import ep from "../assets/ep.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import wb from "../assets/soci-icons/whatsapp.png";

const birmenus = [
  {
    itemname: "ChickenBiriyani",
    title: "Chicken",
    price: "395",
    imgs: cb,
    desc: "Served with Egg, Raitha, Bread Halwa, Brinjal Gravy",
  },
  {
    itemname: "MuttonBiriyani",
    title: "Mutton",
    price: "495",
    imgs: mb,
    desc: "Served with Egg, Raitha, Bread Halwa, Brinjal Gravy",
  },
  {
    itemname: "EggBiriyani",
    title: "Egg",
    price: "295",
    imgs: eb,
    desc: "Served with Egg, Raitha, Bread Halwa, Brinjal Gravy",
  },
];
const dessertmenus = [
  {
    itemname: "ElaneerPayasam",
    title: "Elaneer",
    whites: "Payasam",
    price: "125",
    imgs: ep,
    desc: "Made with fresh tender coconut pulps, milk and jaggery",
  },
  {
    itemname: "BreadHalwa",
    title: "Bread",
    whites: "Halwa",
    price: "75",
    imgs: bh,
    desc: "Freshly made with GHEE without any added colours",
  },
];
const addonmenus = [
  {
    itemname: "Chicken65",
    title: "Chicken",
    whites: "65",
    desc: "250 grams, 5 to 6 pieces with bone pieces",
    price: "309",
    imgs: c65,
  },
  {
    itemname: "FreshRaitha",
    title: "Fresh",
    whites: "Raitha",
    desc: "Made with fresh tender coconut pulps, milk and jaggery",
    price: "45",
    imgs: fr,
  },
  {
    itemname: "BrinjalGravy",
    title: "Brinjal",
    whites: "Gravy",
    desc: "Freshly made yummy brinjal gravy",
    price: "45",
    imgs: bg,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [success, setSuccess] = useState();

  const [order, setOrder] = useState({
    ChickenBiriyani: 0,
    MuttonBiriyani: 0,
    EggBiriyani: 0,
    Chicken65: 0,
    FreshRaitha: 0,
    BrinjalGravy: 0,
    ElaneerPayasam: 0,
    BreadHalwa: 0,
  });

  const handleAddItem = (itemName) => {
    // Check if itemName exists in order state
    if (order.hasOwnProperty(itemName)) {
      // Create a copy of the order state and update the specific item
      setOrder((prevOrder) => ({
        ...prevOrder,
        [itemName]: prevOrder[itemName] + 1,
      }));
    }
  };
  const handleRemItem = (itemName) => {
    // Check if itemName exists in order state
    if (order.hasOwnProperty(itemName)) {
      // Create a copy of the order state and update the specific item
      setOrder((prevOrder) => ({
        ...prevOrder,
        [itemName]: prevOrder[itemName] - 1,
      }));
    }
  };
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const handlePay = async (e) => {
    e.preventDefault();

    if (
      calculateTotalPrice() <= 0 ||
      selectedPaymentMethod === "" ||
      fname === "" ||
      phone === "" ||
      address === "" ||
      email === ""
    ) {
      console.log("kindly fill all the data");
    } else {
      const selectedProducts = Object.entries(order)
        .filter(([itemName, quantity]) => quantity > 0)
        .map(([itemName, quantity]) => ({
          itemName,
          quantity,
        }));
      const userOrder = {
        name: fname,
        email: email,
        phone: phone,
        address: address,
        pincode: pincode,
        amount: calculateTotalPrice(),
        paymethod: selectedPaymentMethod,
        products: selectedProducts,
      };
      console.log(userOrder);
      try {
        const res = await axios.post("https://danjr-backend.onrender.com/orders", userOrder);
        console.log(res);
        if (res.status !== 200) {
          setSuccess("Error placing Order, please try again!");
        } else {
          setSuccess("Your Order has been Placed.");
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      } catch (error) {
        navigate("/menu");
      }
    }
  };
  const calculateTotalPrice = () => {
    let total = 0;
    for (const [itemName, quantity] of Object.entries(order)) {
      const item = [...birmenus, ...dessertmenus, ...addonmenus].find(
        (menu) => menu.itemname === itemName
      );
      if (item) {
        total += quantity * parseInt(item.price);
      }
    }

    return total;
  };

  return (
    <Box
      sx={{
        paddingTop: "120px",
      }}
    >
      <div className="whatsappbtn">
        <a
          href="https://wa.me/919363295500?text=Hi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wb} alt="" />
        </a>
      </div>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          margin: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {birmenus.map((item) => (
          <Box
            key={item.itemname}
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
                <Typography
                  sx={{ color: "#fff", width: "280px", height: "250px" }}
                >
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px",
                    }}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "35px",
                        color: "#F23B15",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      {order[item.itemname] > 0 ? (
                        <Box
                          sx={{
                            backgroundColor: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleRemItem(item.itemname)}
                          >
                            -
                          </button>
                          {order[item.itemname]}
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleAddItem(item.itemname)}
                          >
                            +
                          </button>
                        </Box>
                      ) : (
                        <button
                          style={{
                            backgroundColor: "transparent",
                            color: "#F23B15",
                            border: "none",
                            fontWeight: "bolder",
                            fontSize: "20px",
                          }}
                          onClick={() => handleAddItem(item.itemname)}
                        >
                          ADD
                        </button>
                      )}
                    </button>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: "#FEB902",
          textAlign: "center",
          margin: "60px",
          fontFamily: "'Poppins',sans-serif",
        }}
      >
        Add On
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          margin: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {addonmenus.map((item) => (
          <Box
            key={item.itemname}
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
                height: "300px",
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
                <Typography
                  sx={{
                    color: "#fff",
                    width: "280px",
                    height: "180px",
                  }}
                >
                  <span
                    style={{
                      color: "#FEB902",
                      fontFamily: "'poppins',sans-serif",
                      fontSize: "30px",
                    }}
                  >
                    {item.title}{" "}
                    <span style={{ color: "#fff" }}>{item.whites}</span>
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      width: "100px",
                      color: "#C0C0C0",
                    }}
                  >
                    {item.desc}
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px",
                    }}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "35px",
                        color: "#F23B15",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      {order[item.itemname] > 0 ? (
                        <Box
                          sx={{
                            backgroundColor: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleRemItem(item.itemname)}
                          >
                            -
                          </button>
                          {order[item.itemname]}
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleAddItem(item.itemname)}
                          >
                            +
                          </button>
                        </Box>
                      ) : (
                        <button
                          style={{
                            backgroundColor: "transparent",
                            color: "#F23B15",
                            border: "none",
                            fontWeight: "bolder",
                            fontSize: "20px",
                          }}
                          onClick={() => handleAddItem(item.itemname)}
                        >
                          ADD
                        </button>
                      )}
                    </button>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: "#FEB902",
          textAlign: "center",
          margin: "60px",
          fontFamily: "'Poppins',sans-serif",
        }}
      >
        Desserts
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          margin: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {dessertmenus.map((item) => (
          <Box
            key={item.itemname}
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
                <Typography
                  sx={{ color: "#fff", width: "280px", height: "200px" }}
                >
                  <span
                    style={{
                      color: "#FEB902",
                      fontFamily: "'poppins',sans-serif",
                      fontSize: "30px",
                    }}
                  >
                    {item.title}{" "}
                    <span style={{ color: "#fff" }}>{item.whites}</span>
                  </span>
                  <br />

                  <span
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      width: "100px",
                      color: "#C0C0C0",
                    }}
                  >
                    {item.desc}
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px",
                    }}
                  >
                    <button
                      style={{
                        width: "100px",
                        height: "35px",
                        color: "#F23B15",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      {order[item.itemname] > 0 ? (
                        <Box
                          sx={{
                            backgroundColor: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleRemItem(item.itemname)}
                          >
                            -
                          </button>
                          {order[item.itemname]}
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              fontWeight: "bolder",
                              fontSize: "20px",
                              padding: "5px",
                            }}
                            onClick={() => handleAddItem(item.itemname)}
                          >
                            +
                          </button>
                        </Box>
                      ) : (
                        <button
                          style={{
                            backgroundColor: "transparent",
                            color: "#F23B15",
                            border: "none",
                            fontWeight: "bolder",
                            fontSize: "20px",
                          }}
                          onClick={() => handleAddItem(item.itemname)}
                        >
                          ADD
                        </button>
                      )}
                    </button>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "120px 0px",
        }}
      >
        <button
          onClick={handleOpen}
          style={{
            fontFamily: "'poppins',sans-serif",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
            width: "max-content",
            border: "3px solid #fff",
            borderRadius: "10px",
            fontWeight: "bolder",
            color: "#FEB902",
            padding: "10px 60px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "25px",
              fontFamily: '"poppins",sans-serif',
            }}
          >
            Check Out
          </Typography>
        </button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "transparent" }}
      >
        {success ? (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              border: "2px solid #fff",
              boxShadow: 24,
              p: 4,
              borderRadius: "20px",
              textAlign: "center",
              display: "flex",
              overflow: "auto",
              height: "80vh",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            {success}
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              border: "2px solid #fff",
              boxShadow: 24,
              p: 4,
              borderRadius: "20px",
              textAlign: "center",
              overflow: "auto",
              height: "80vh",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "transparent",
                margin: "15px 0px",
                fontSize: "25px",
                color: "#fff",
                fontFamily: '"poppins",sans-serif',
              }}
            >
              Complete Your flavourful{" "}
              <span style={{ color: "#FEB902" }}>Deal</span>
            </Typography>
            <Box sx={{ margin: "10px 100px" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "22px",
                  textAlign: "left",
                  fontWeight: "bolder",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    color: "#FEB902",
                    fontFamily: '"poppins",sans-serif',
                  }}
                >
                  Bill
                </span>{" "}
                Summary
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    color: "red",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      fontWeight: "bolder",
                    }}
                  >
                    Item
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      fontWeight: "bolder",
                    }}
                  >
                    Quantity
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      fontWeight: "bolder",
                    }}
                  >
                    Price
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    color: "red",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  {Object.entries(order)
                    .filter(([itemName, quantity]) => quantity > 0)
                    .map(([itemName, quantity]) => {
                      const item = [
                        ...birmenus,
                        ...dessertmenus,
                        ...addonmenus,
                      ].find((menu) => menu.itemname === itemName);
                      return (
                        <Box
                          key={itemName}
                          style={{
                            backgroundColor: "transparent",
                            width: "400px",
                            color: "#F23B15",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Typography
                            style={{
                              width: "20%",
                              textAlign: "left",
                              backgroundColor: "transparent",
                            }}
                          >
                            {item ? item.title : itemName}
                          </Typography>
                          <Typography
                            style={{
                              width: "10%",
                              backgroundColor: "transparent",
                            }}
                          >
                            {quantity}
                          </Typography>
                          <Typography
                            style={{
                              width: "10%",
                              backgroundColor: "transparent",
                            }}
                          >
                            ₹{item ? quantity * parseInt(item.price) : 0}
                          </Typography>
                        </Box>
                      );
                    })}
                </Box>
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bolder",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#FEB902",
                    fontFamily: '"poppins",sans-serif',
                  }}
                >
                  Total
                </span>{" "}
                ₹{calculateTotalPrice()}
              </Typography>
            </Box>
            <form
              className="orderForm"
              style={{
                color: "red",
                textAlign: "center",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                margin: "50px 0px",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  width: "60%",
                  height: "40px",
                  backgroundColor: "#ededed",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  width: "60%",
                  height: "40px",
                  backgroundColor: "#ededed",
                }}
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  width: "60%",
                  height: "40px",
                  backgroundColor: "#ededed",
                }}
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  width: "60%",
                  height: "40px",
                  backgroundColor: "#ededed",
                }}
              />
              <input
                type="number"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  width: "60%",
                  height: "40px",
                  backgroundColor: "#ededed",
                }}
              />
              <Box sx={{ fontSize: "15px" }}>
                <Typography
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    fontFamily: '"poppins",sans-serif',
                  }}
                >
                  Payment Method
                </Typography>
                <label
                  style={{
                    color: "#FEB902",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  <input
                    type="radio"
                    placeholder="Name"
                    value="UPI"
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      margin: "20px 10px",
                    }}
                    checked={selectedPaymentMethod === "UPI"}
                    onChange={handlePaymentMethodChange}
                  />{" "}
                  UPI
                </label>
                <label
                  style={{
                    color: "#FEB902",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                >
                  <input
                    type="radio"
                    placeholder="COD"
                    value="COD"
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      margin: "20px 10px",
                    }}
                    checked={selectedPaymentMethod === "COD"}
                    onChange={handlePaymentMethodChange}
                  />
                  COD
                </label>
              </Box>
              <button
                onClick={handlePay}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "2px solid #fff",
                  color: "#fff",
                  fontWeight: "bolder",
                  backgroundColor: "#1A6B00",
                }}
              >
                Pay
              </button>
            </form>
          </Box>
        )}
      </Modal>
    </Box>
  );
};

export default Menu;
