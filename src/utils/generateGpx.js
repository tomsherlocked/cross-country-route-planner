export const generateGpx = (waypointArr) =>
  `<?xml version="1.0"?>
    <gpx version="1.1" creator="Tom Sherlock">${waypointArr
      .map((point) => `<wpt lat="${point.lat}" lon="${point.long}"></wpt>`)
      .join(`\n`)}</gpx>`;
