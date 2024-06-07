import React from "react";
import aboutMeData from "./history";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <ul>
        {aboutMeData.map((item) => (
          <li key={item.id}>
            {item.year && <strong>{item.year}:</strong>} {item.description}
          </li>
        ))}
      </ul>
      <div>
        MCPod - Member of the College of Podiatry - membership number - 07675
      </div>
      <div>
        DPodM - Diploma of Podiatric Medicine - membership number M/07675
      </div>
      <div>
        HCPC - Health Care Professional Council - membership number CH06728
      </div>
    </div>
  );
}
