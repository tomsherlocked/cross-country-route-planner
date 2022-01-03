import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListItem({
  index,
  handleDelete,
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
  id,
  children,
}) {
  return (
    <li
      className="sidebar__list-item"
      draggable
      onDragStart={() => handleDragStart(index)}
      onDragEnter={() => handleDragEnter(index)}
      onDragEnd={handleDragEnd}
      onDragOver={(dragEvent) => dragEvent.preventDefault()}
    >
      <span className="icon__container">
        <FontAwesomeIcon icon={faBars} className="icon icon--grey" />
      </span>
      <p>
        Waypoint {index+1}
      </p>
      <span className="icon__container" onClick={() => handleDelete(index)}>
        <FontAwesomeIcon icon={faTrash} className="icon icon--grey" />
      </span>
    </li>
  );
}
