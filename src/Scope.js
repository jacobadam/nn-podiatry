import React from "react";
import scopeInformation from "./scope-information";

export default function Scope() {
  return (
    <div>
      <h1>Scope of Practice</h1>
      <div>
        {scopeInformation.map((scope) => (
          <p>{scope}</p>
        ))}
      </div>
    </div>
  );
}
