import { Helmet } from "react-helmet-async";

export default function Conditions() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Neil Nevitt - Services</title>
        <link rel="canonical" href="https://www.neilnevitt.com/services" />
        <meta
          name="description"
          content="Explore the range of podiatry services offered by Neil Nevitt, including diabetic foot care, nail surgery, and more."
        />
      </Helmet>
      <div className="mx-auto py-2 px-4 mb-8">
        <div className="text-xl py-2 font-normal text-center tracking-wider">
          <h1 className="mb-8 text-3xl tracking-tight font-bold text-gray-900">
            Our Services
          </h1>
        </div>
        <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          {/* card item */}
          <a
            href="https://rcpod.org.uk/patient-information/diabetes"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="diabetic-feet-title"
            aria-describedby="diabetic-feet-description"
            aria-label="Learn more about Diabetic Feet"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/diabetic-feet.webp"}
                alt="Diabetic Feet"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="diabetic-feet-title">Diabetic Feet</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="diabetic-feet-description">
                Diabetes causes high blood glucose, damaging nerves and blood
                vessels, affecting circulation to legs, feet, and tissues.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/common-foot-problems/ageing-feet"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="ageing-feet-title"
            aria-describedby="ageing-feet-description"
            aria-label="Learn more about Ageing Feet"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/ageing-feet.webp"}
                alt="Ageing Feet"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="ageing-feet-title">Ageing Feet</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="ageing-feet-description">
                Ageing causes foot issues due to joint wear, thinner skin, and
                dryness; routine care prevents serious problems and aids
                mobility.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/common-foot-problems/ingrowing-toenail"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="ingrowing-toenail-title"
            aria-describedby="ingrowing-toenail-description"
            aria-label="Learn more about Ingrowing Toenail"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/ingrowing-toenail.webp"}
                alt="Ingrowing Toenail"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="ingrowing-toenail-title">Ingrowing Toenail </h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="ingrowing-toenail-description">
                An ingrown toenail pierces flesh, causing pain, inflammation, or
                infection. It often affects the big toe but can affect others.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/patient-information/arthritis/arthritis-leaflets/toenail-surgery-for-people-with-a-rheumatic-condition"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="nail-surgery-title"
            aria-describedby="nail-surgery-description"
            aria-label="Learn more about Nail Surgery"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/nail-surgery.webp"}
                alt="Nail Surgery"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="nail-surgery-title">Nail Surgery</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="nail-surgery-description">
                Nail surgery performed by qualified professionals removes
                problematic toenails and may use chemicals to prevent regrowth.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/common-foot-problems/corns-callus"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="corn-callus-title"
            aria-describedby="corn-callus-description"
            aria-label="Learn more about Corns and Calluses"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/corn-callus.webp"}
                alt="Corn Callus"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="corn-callus-title">Corns and Calluses</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="corn-callus-description">
                Walking and standing pressure can cause corns and calluses.
                Calluses are areas of hard skin on the sole; corns form over
                bony areas.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/common-foot-problems/verrucae"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="verrucae-title"
            aria-describedby="verrucae-description"
            aria-label="Learn more about Verrucae"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/verrucae.webp"}
                alt="Verrucae"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="verrucae-title">Verrucae</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="verrucae-description">
                Verrucae are plantar warts caused by the contagious Human
                Papilloma Virus. They can occur on the soles of the feet or
                around the toe area.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
          <a
            href="https://rcpod.org.uk/common-foot-problems/flat-foot-management"
            target="_blank"
            rel="noreferrer"
            className="w-64 shadow-md rounded-sm bg-white hover:scale-102 duration-300 hover:shadow-xl h-96 block"
            aria-labelledby="musculoskeletal-title"
            aria-describedby="musculoskeletal-description"
            aria-label="Learn more about Musculoskeletal Podiatry"
          >
            <div className="p-2">
              <img
                className="rounded-lg h-32 w-full"
                src={"/msk-podiatry.webp"}
                alt="Musculoskeletal"
              />
            </div>
            <div className="px-4 py-2 text-xl font-semibold text-center">
              <h2 id="musculoskeletal-title">Musculoskeletal</h2>
            </div>
            <div className="flex justify-between px-4 py-2 text-base font-normal text-center mb-1">
              <p id="musculoskeletal-description">
                MSK (Musculoskeletal) is a specialist area of podiatry which
                concentrates on functional and structural issues of the foot and
                ankle.
              </p>
            </div>
            <div className="p-2 text-center">
              <span className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Learn more
              </span>
            </div>
          </a>
          {/* card item */}
        </div>
      </div>
    </div>
  );
}
