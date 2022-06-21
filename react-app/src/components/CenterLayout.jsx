import React from "react";

const CenterLayout = ({ children }) => {
  return (
    <div className="d-block mb-4">
      <div className="mx-auto col col-md-6 col-lg-4">{children}</div>
    </div>
  );
};

export default CenterLayout;
