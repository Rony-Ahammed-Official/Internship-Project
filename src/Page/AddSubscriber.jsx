import React, { useState } from "react";
import axios from "axios";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./AddSubscriber.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import qrImage from "./QR.png";

export default function AddSubscriber() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    ageGroup: "",
    gender: "",
    contactNumber: "",
    email: "",
    zone: "",
    area: "",
    detailsAddress: "",
    recyclableWasteFrequency: "",
    participateEvents: "",
    estimatedQuantity: "",
    businessCollection: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3030/subscribers", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <div className="form-container">
          {isSubmitted ? (
            <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
              Your form has been successfully submitted!
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="type">
                <span className="required-star">*</span>Type
              </label>
              <select
                id="type"
                name="type"
                required
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="household_individual">
                  General - Household/Individual
                </option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="name">
                <span className="required-star">*</span>Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="ageGroup">
                <span className="required-star">*</span>Age Group
              </label>
              <input
                type="text"
                id="ageGroup"
                name="ageGroup"
                placeholder="Age Group"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="gender">
                <span className="required-star">*</span>Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="contactNumber">
                <span className="required-star">*</span>Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                placeholder="Contact Number"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="email">
                <span className="required-star">*</span>Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="zone">
                <span className="required-star">*</span>Zone
              </label>
              <select
                id="zone"
                name="zone"
                required
                onChange={handleInputChange}
              >
                <option value="">Select your zone</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </select>

              <label htmlFor="area">
                <span className="required-star">*</span>Area
              </label>
              <select
                id="area"
                name="area"
                required
                onChange={handleInputChange}
              >
                <option value="">Select your area</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </select>

              <label htmlFor="detailsAddress">
                <span className="required-star">*</span>Details Address
              </label>
              <input
                type="text"
                id="detailsAddress"
                name="detailsAddress"
                placeholder="Detailed Address"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="recyclableWasteFrequency">
                <span className="required-star">*</span>How often do you want to
                discard your recyclable waste?
              </label>
              <input
                type="text"
                id="recyclableWasteFrequency"
                name="recyclableWasteFrequency"
                placeholder="Recyclable Waste Frequency"
                required
                onChange={handleInputChange}
              />

              <Typography
                variant="subtitle"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: "0",
                  marginBottom: "5px",
                }}
              >
                Do you want to participate in our upcoming events? (Cleanup
                drive community meetup workshop)
              </Typography>
              <div
                className="radio-group"
                style={{ textAlign: "left", paddingLeft: "0" }}
              >
                <label>
                  <input
                    type="radio"
                    name="participateEvents"
                    value="yes"
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="participateEvents"
                    value="no"
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>

              <label htmlFor="estimatedQuantity">
                <span className="required-star">*</span>Estimated quantity in
                kg(month)
              </label>
              <input
                type="text"
                id="estimatedQuantity"
                name="estimatedQuantity"
                placeholder="Estimated Quantity in KG"
                required
                onChange={handleInputChange}
              />

              <Typography
                variant="subtitle"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: "0",
                  marginBottom: "5px",
                }}
              >
                Do you have a business that needs a collection service?
              </Typography>
              <div
                className="radio-group"
                style={{ textAlign: "left", paddingLeft: "0" }}
              >
                <label>
                  <input
                    type="radio"
                    name="businessCollection"
                    value="yes"
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="businessCollection"
                    value="no"
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          )}
        </div>
      </Box>
      <Box className="mainContainer">
        <Box component="main" className="content">
          <Box className="boxContainer">
            <Typography
              variant="subtitle1"
              component="div"
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              Total Waste
            </Typography>
            <Button
              variant="contained"
              className="totalWasteButton"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              0 KG
            </Button>
          </Box>
          <Box className="boxContainer qrCodeContainer">
            <img src={qrImage} alt="QR Code" className="qrCodeImage" />
            <a
              href={qrImage}
              download="QRCode.png"
              style={{ textDecoration: "none" }}
            >
              <IconButton
                color="primary"
                aria-label="download qr code"
                className="downloadButton"
              >
                <DownloadIcon />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
