import React from "react";

export default function Conditions() {
  return (
    <div>
      <h1>Conditions Treated</h1>
      <ul>
        <li>
          <a
            href="https://rcpod.org.uk/patient-information/diabetes"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to diabetes information page"
          >
            Diabetes
          </a>
        </li>

        <ul>
          <li>Insulin dependent</li>
          <li>Non-insulin dependent</li>
        </ul>

        <li>
          <a
            href="https://rcpod.org.uk/common-foot-problems/ageing-feet"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to ageing feet information page"
          >
            Nails/Ageing feet
          </a>
        </li>
        <ul>
          <li>Long</li>
          <li>Thickened</li>
          <li>Damaged</li>
        </ul>

        <li>
          <a
            href="https://rcpod.org.uk/common-foot-problems/ingrowing-toenail"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to ingrowing toenails information page"
          >
            Ingrowing toenails
          </a>
        </li>
        <ul>
          <li>Inflammed</li>
          <li>Infected</li>
        </ul>
        <li>Nail surgery</li>
        <ul>
          <li>Permanent Cure</li>
          <li>Under local anaesthetic</li>
        </ul>
        <li>
          <a
            href="https://rcpod.org.uk/common-foot-problems/corns-callus"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to corns and callus information page"
          >
            Corns and callus
          </a>
        </li>
        <ul>
          <li>On Toes</li>
          <li>Between Toes</li>
          <li>Under feet</li>
        </ul>
        <li>
          <a
            href="https://rcpod.org.uk/common-foot-problems/verrucae"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to verrucae information page"
          >
            Verrucae
          </a>
        </li>
        <ul>
          <li>Warts</li>
        </ul>
        <li>Musculoskeletal/Biomechanical issues</li>
        <ul>
          <li>Plantar fasciitis</li>
          <li>Pronation ("flat foot")</li>
          <li>Gait analysis</li>
        </ul>
      </ul>
    </div>
  );
}
