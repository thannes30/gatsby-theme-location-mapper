import React from "react";

const LocationsMap = ({ locations }) => {
  return <pre>{JSON.stringify(locations, null, 2)}</pre>;
};

export default LocationsMap;
