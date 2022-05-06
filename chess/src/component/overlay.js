import React from "react";
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 1,
  opacity: 0.5
};
const Overlay = ({ color }) => {
  return (
    <div
      style={{
        ...overlayStyle,
        backgroundColor: color
      }}
    />
  );
};
export default Overlay;
