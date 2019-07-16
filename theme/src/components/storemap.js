import React from "react";

const StoreMap = ({ locations }) => {
  return <pre>{JSON.stringify(locations, null, 2)}</pre>;
};

export default StoreMap;
