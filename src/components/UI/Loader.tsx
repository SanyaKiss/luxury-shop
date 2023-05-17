import React from "react";
import "../../scss/UI/Loader.scss";

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
