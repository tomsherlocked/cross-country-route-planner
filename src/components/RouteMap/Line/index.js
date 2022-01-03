import React from "react";

export default function Line({
  mapState: { width, height },
  latLngToPixel,
  coordsArray,
}) {
  if (coordsArray.length < 2) {
    return null;
  }

  const lines = [];
  let initialPoint = latLngToPixel(coordsArray[0]);

  coordsArray.forEach((point, index) => {
    const secondPoint = latLngToPixel(point);
    lines.push(
      <line
        key={index}
        x1={initialPoint[0]}
        y1={initialPoint[1]}
        x2={secondPoint[0]}
        y2={secondPoint[1]}
        className="map__line"
      />
    );
    initialPoint = secondPoint;
  });

  return (
    <svg width={width} height={height} style={{ top: 0, left: 0 }}>
      {lines}
    </svg>
  );
}
