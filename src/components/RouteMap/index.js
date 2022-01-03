import React from "react";
import { Map as BaseMap, Draggable } from "pigeon-maps";
import { useWaypoints } from "../../providers/waypoint-provider";
import WaypointMarker from "./WaypointMarker";
import Line from "./Line";

const DEFAULT_MAP_CENTRER = [51.1841, -0.4277];

export default function RouteMap() {
  const { waypoints, setWaypoints } = useWaypoints();

  const handleMapClick = (clickEvent) => {
    // deep copy waypoint list to update state properly
    setWaypoints([
      ...waypoints,
      { lat: clickEvent.latLng[0], long: clickEvent.latLng[1] },
    ]);
  };

  const handleWaypointDrag = (newCoords, index) => {
    const waypointCopy = [...waypoints];
    waypointCopy[index] = { lat: newCoords[0], long: newCoords[1] };
    setWaypoints(waypointCopy);
  };

  return (
    <div className="map__container">
      <BaseMap
        defaultCenter={DEFAULT_MAP_CENTRER}
        defaultZoom={14}
        onClick={handleMapClick}
      >
        {waypoints.map((marker, index) => (
          <Draggable
            key={index}
            anchor={[marker.lat, marker.long]}
            offset={[13, 13]}
            onDragEnd={(event) => handleWaypointDrag(event, index)}
          >
            <WaypointMarker>{index + 1}</WaypointMarker>
          </Draggable>
        ))}
        <Line coordsArray={waypoints.map((point) => [point.lat, point.long])} />
      </BaseMap>
    </div>
  );
}
