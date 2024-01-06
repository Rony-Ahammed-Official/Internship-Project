import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./UpdateSubscriber.css";

export default function UpdateSubscriber() {
  const [subscriber, setSubscriber] = useState({
    name: "",
    type: "",
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriber = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/subscribers/${id}`
        );
        setSubscriber(response.data);
      } catch (error) {
        console.error("Error fetching subscriber data", error);
      }
    };

    fetchSubscriber();
  }, [id]);

  const handleChange = (e) => {
    setSubscriber({ ...subscriber, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3030/subscribers/${id}`, subscriber);
      navigate("/subscriberlist");
    } catch (error) {
      console.error("Error updating subscriber", error);
    }
  };

  return (
    <Box sx={{ display: "flex" }} className="main-container">
      <SideBar />
      <Box component="main" className="form-container">
        <Typography variant="h4" className="form-heading">
          Edit Subscriber Details
        </Typography>
        <form onSubmit={handleSubmit} className="update-form">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={subscriber.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Type"
            variant="outlined"
            name="type"
            value={subscriber.type}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Age Group"
            variant="outlined"
            name="ageGroup"
            value={subscriber.ageGroup}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Gender"
            variant="outlined"
            name="gender"
            value={subscriber.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Contact Number"
            variant="outlined"
            name="contactNumber"
            value={subscriber.contactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={subscriber.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Zone"
            variant="outlined"
            name="zone"
            value={subscriber.zone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Area"
            variant="outlined"
            name="area"
            value={subscriber.area}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Details Address"
            variant="outlined"
            name="detailsAddress"
            value={subscriber.detailsAddress}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Recyclable Waste Frequency"
            variant="outlined"
            name="recyclableWasteFrequency"
            value={subscriber.recyclableWasteFrequency}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Participate in Events"
            variant="outlined"
            name="participateEvents"
            value={subscriber.participateEvents}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Estimated Quantity (kg/month)"
            variant="outlined"
            name="estimatedQuantity"
            value={subscriber.estimatedQuantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Business Collection"
            variant="outlined"
            name="businessCollection"
            value={subscriber.businessCollection}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="input-field"
          />
          <div className="submit-btn-container">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-btn"
            >
              Update Subscriber
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
}
