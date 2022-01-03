import React, { useRef } from "react";
import ListItem from "../ListItem";
import { useWaypoints } from "../../../providers/waypoint-provider";

export default function WaypointList() {
  const { waypoints, setWaypoints } = useWaypoints();
  const currentDragItem = useRef();
  const dragOverItem = useRef();

  const handleDragEnd = () => {
    // copy list of points & get current item
    const waypointListCopy = [...waypoints];
    const currentDragItemContent = waypointListCopy[currentDragItem.current];

    // re-order points
    waypointListCopy.splice(currentDragItem.current, 1);
    waypointListCopy.splice(dragOverItem.current, 0, currentDragItemContent);

    // clear current items & update state
    currentDragItem.current = null;
    dragOverItem.current = null;
    setWaypoints(waypointListCopy);
  };

  const handleDelete = (index) => {
    const waypointListCopy = [...waypoints];
    waypointListCopy.splice(index, 1);
    setWaypoints(waypointListCopy);
  };

  return (
    <>
      {!!waypoints.length ? (
        <ul className="sidebar__list">
          {waypoints.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              handleDelete={handleDelete}
              handleDragEnd={handleDragEnd}
              handleDragEnter={(position) => {
                dragOverItem.current = position;
              }}
              handleDragStart={(position) => {
                currentDragItem.current = position;
              }}
            >
              {item}
            </ListItem>
          ))}
        </ul>
      ) : (
        <div>
          <p className="sidebar__list-item--empty">
            No waypoints added yet, start clicking!
          </p>
        </div>
      )}
    </>
  );
}
