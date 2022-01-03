import React, { createContext, useContext, useState } from "react";

const WaypointContext = createContext(null);

export const useWaypoints = () => useContext(WaypointContext);

function WaypointProvider({ children }) {
  const [waypoints, setWaypoints] = useState([
    // { lat: 51.1841, long: -0.4277 },
  ]);

  const value = {
    waypoints,
    setWaypoints,
  };

  return (
    <WaypointContext.Provider value={value}>
      {children}
    </WaypointContext.Provider>
  );
}

export default WaypointProvider;
