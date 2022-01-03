import React from "react";
import DownloadButton from "./DownloadButton";
import WaypointList from "./WaypointList";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Route Builder</h2>
      <WaypointList />
      <div className="sidebar__button-container">
        <DownloadButton />
      </div>
    </div>
  );
}
