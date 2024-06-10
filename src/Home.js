import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="homepageBox">
      <div className="qualifications">
        <h1>Neil Nevitt</h1>
        <h2>DPodm, MRCPod</h2>
        <h3>Liverpool Podiatrist/Chiropodist</h3>
        <h4>Qualified Salford University 1976</h4>
        <h5>HCPC (State) Registered</h5>
        <h6>Tel: 0151 722 3840</h6>
        <h6>Mobile: 07946 582000</h6>
        <h6>Wavertree/Childwall</h6>
      </div>
      <div>
        <img src="/accepted-cards.webp" alt="accepted-cards" />
        <img src="/hcpc-reg.webp" alt="hcpc-reg" />
      </div>
    </div>
  );
}
