import React from "react";
import LocationsNav from "./locationsnav";

const LocationsMap = (locations) => {
  return (
    <>
      <LocationsNav />
      <pre>{JSON.stringify(locations, null, 2)}</pre>
    </>
  );
};

export default LocationsMap;
