import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../Component/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SubscriberList.css";

export default function SubscriberList() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("http://localhost:3030/subscribers");
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers", error);
      }
    };

    fetchSubscribers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this subscriber?")) {
      try {
        await axios.delete(`http://localhost:3030/subscribers/${id}`);
        setSubscribers(
          subscribers.filter((subscriber) => subscriber.id !== id)
        );
      } catch (error) {
        console.error("Error deleting subscriber", error);
      }
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Typography variant="h5">Subscriber List</Typography>
        <div>
          {subscribers.length > 0 ? (
            subscribers.map((subscriber) => (
              <Box
                key={subscriber.id}
                sx={{
                  marginTop: "20px",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                <Typography variant="h6">{subscriber.name}</Typography>
                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Type:
                  </span>{" "}
                  {subscriber.type}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Age Group:
                  </span>
                  {subscriber.ageGroup}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Gender:
                  </span>{" "}
                  {subscriber.gender}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Contact Number:
                  </span>{" "}
                  {subscriber.contactNumber}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Email:
                  </span>
                  {subscriber.email}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Zone:
                  </span>
                  {subscriber.zone}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Area:
                  </span>{" "}
                  {subscriber.area}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Details Address:
                  </span>{" "}
                  {subscriber.detailsAddress}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    How often do you want to discard your recyclable waste?:
                  </span>{" "}
                  {subscriber.recyclableWasteFrequency}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Do you want to participate in our upcoming events? (Cleanup
                    drive community meetup workshop):
                  </span>{" "}
                  {subscriber.participateEvents}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Estimated quantity in kg(month):
                  </span>
                  {subscriber.estimatedQuantity}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Do you have a business that needs a collection service?:{" "}
                  </span>{" "}
                  {subscriber.businessCollection}
                </Typography>

                <button onClick={() => handleDelete(subscriber.id)}>
                  Delete
                </button>
                <Link to={`/subscriberlist/updatesubscriber/${subscriber.id}`}>
                  <button className="update">Update</button>
                </Link>
              </Box>
            ))
          ) : (
            <Typography>No subscribers found.</Typography>
          )}
        </div>
      </Box>
    </Box>
  );
}
