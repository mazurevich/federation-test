import React from "react";

const Header = ({ title }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "32px",
        fontSize: "2rem",
        lineHeight: "2rem",
        padding: "8px 16px",
        background: "#48c8c6",
      }}
    >
      {title}
    </div>
  );
};

export default Header;


