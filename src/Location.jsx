import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;

const mapContainerStyle = {
  width: "100%",
  height: "435px",
};

const center = {
  lat: 53.39627456665039,
  lng: -2.897101402282715,
};

export default function Location() {
  return (
    <section
      aria-labelledby="location-heading"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="location-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Location
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          The surgery is two doors down from the Wetherspoons (formerly
          Childwall Fiveways Pub) at the Childwall Fiveways roundabout and
          opposite Grosvenor Court. Parking is usually available on the drive
          outside the surgery or paid parking is available in the Wetherspoons
          car park.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <APIProvider apiKey={API_KEY}>
            <Map
              style={mapContainerStyle}
              defaultCenter={center}
              defaultZoom={14}
              mapId={MAP_ID}
              gestureHandling="greedy"
              aria-label="Map showing the location of the surgery"
            >
              <AdvancedMarker position={center} />
            </Map>
          </APIProvider>
        </div>

        <div className="flex h-full flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h3
                id="address-heading"
                className="text-lg font-semibold text-gray-900"
              >
                Address
              </h3>
              <p
                className="mt-2 text-sm leading-7 text-gray-600 sm:text-base"
                aria-labelledby="address-heading"
              >
                183 Queens Drive
                <br />
                Liverpool
                <br />
                L15 6XU
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3
                id="contact-heading"
                className="text-lg font-semibold text-gray-900"
              >
                Contact
              </h3>
              <div
                className="mt-2 space-y-1 text-sm leading-7 text-gray-600 sm:text-base"
                aria-labelledby="contact-heading"
              >
                <p>Email: neilnev@hotmail.com</p>
                <p>Tel: 0151 722 3840</p>
                <p>Mob: 07946 582000</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Accepted Payments
              </h3>
              <img
                className="mt-3 h-auto w-48 sm:w-56"
                src="/accepted-cards.webp"
                alt="Accepted payment cards"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
