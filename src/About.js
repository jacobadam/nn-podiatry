import React from "react";
import aboutMeData from "./history";

export default function About() {
  return (
    <section class="min-h-screen bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="text-center lg:text-left lg:pt-8">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Neil Nevitt
          </h2>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend purus sed libero ultrices, eget accumsan metus congue. Ut
              gravida sapien sit amet nunc lacinia commodo. Vivamus id imperdiet
              turpis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend purus sed libero ultrices, eget accumsan metus congue. Ut
              gravida sapien sit amet nunc lacinia commodo. Vivamus id imperdiet
              turpis.
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center mt-8 lg:mt-0">
          <img
            class="w-48 sm:w-64 md:w-60 rounded-lg"
            src="/neilnevitt.webp"
            alt="neil nevitt"
          />
        </div>
      </div>
    </section>
  );
}

// <div>
//   <h1>About Me</h1>
//   <ul>
//     {aboutMeData.map((item) => (
//       <li key={item.id}>
//         {item.year && <strong>{item.year}:</strong>} {item.description}
//       </li>
//     ))}
//   </ul>
//   <div>
//     MCPod - Member of the College of Podiatry - membership number - 07675
//   </div>
//   <div>
//     DPodM - Diploma of Podiatric Medicine - membership number M/07675
//   </div>
//   <div>
//     HCPC - Health Care Professional Council - membership number CH06728
//   </div>
// </div>
