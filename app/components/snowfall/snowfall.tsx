/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

const SnowfallBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) return null;

  return (
    <Snowfall.default />
  );
};

export default SnowfallBackground;