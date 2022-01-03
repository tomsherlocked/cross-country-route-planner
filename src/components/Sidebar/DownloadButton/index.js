import React, { useMemo } from "react";
import { generateGpx } from "../../../utils/generateGpx";
import { useWaypoints } from "../../../providers/waypoint-provider";

export default function DownloadButton() {
  const { waypoints } = useWaypoints();

  // if we have waypoints, then enable button, etc
  const canDownload = useMemo(() => !!waypoints.length, [waypoints]);

  const createFileUrl = () =>
    canDownload
      ? URL.createObjectURL(
          new Blob([generateGpx(waypoints)], { type: "application/xml" })
        )
      : null;
  return (
    <a
      className={`sidebar__button sidebar__button${
        canDownload ? "--active" : "--disabled"
      }`}
      href={createFileUrl()}
      target="_blank"
      rel="noreferrer"
      download={`xc-running-route.gpx`}
    >
      Download your Route
    </a>
  );
}
