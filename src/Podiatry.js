import React from "react";
import podiatryInformation from "./podiatry-information";

export default function Podiatry() {
  return (
    <div>
      <h1>Podiatry Information</h1>
      <div>
        {podiatryInformation.map((information) => (
          <p>{information}</p>
        ))}
      </div>
    </div>
  );
}
