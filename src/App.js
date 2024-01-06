import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Overview from "./Page/Overview";
import AddSubscriber from "./Page/AddSubscriber";
import SubscriberList from "./Page/SubscriberList";
import UpdateSubscriber from "./Page/UpdateSubscriber";
import TaskList from "./Page/TaskList";
import AddRunnerVehicle from "./Page/AddRunnerVehicle";
import TrackVehicle from "./Page/TrackVehicle";
import LastPage from "./Page/LastPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/addsubscriber" element={<AddSubscriber />} />
          <Route path="/subscriberlist" element={<SubscriberList />} />
          <Route
            path="/subscriberlist/updatesubscriber/:id"
            element={<UpdateSubscriber />}
          />

          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/addrunnervehicle" element={<AddRunnerVehicle />} />
          <Route path="/trackvehicle" element={<TrackVehicle />} />
          <Route path="/lastpage" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
