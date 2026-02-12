import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { Helmet } from "react-helmet-async";

const API_KEY = import.meta.env.REACT_APP_GOOGLE_API_KEY;
const MAP_ID = import.meta.env.REACT_APP_MAP_ID;

const mapContainerStyle = {
  width: "100%",
  height: "480px",
};
const center = {
  lat: 53.39627456665039,
  lng: -2.897101402282715,
};

export default function Location() {
  return (
    <section className="min-h-screen" aria-labelledby="location-heading">
      <Helmet>
        <title>Neil Nevitt - Location</title>
        <link rel="canonical" href="https://www.neilnevitt.com/location" />
        <meta
          name="description"
          content="Find Neil Nevitt's podiatry practice location in Liverpool, including address, contact details, and directions."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl font-bold text-gray-900"
            id="location-heading"
          >
            Location
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            The surgery is two doors down from the Wetherspoons (formerly
            Childwall Fiveways Pub) at the Childwall Fiveways roundabout and
            opposite Grosvenor Court. Parking is usually available on the drive
            outside the surgery or paid parking is available in the Wetherspoons
            car park.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <APIProvider apiKey={API_KEY}>
                <Map
                  style={mapContainerStyle}
                  defaultCenter={center}
                  defaultZoom={14}
                  mapId={MAP_ID}
                  gestureHandling={"greedy"}
                  aria-label="Map showing the location of the surgery"
                >
                  <AdvancedMarker position={center} />
                </Map>
              </APIProvider>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3
                    className="text-lg font-medium text-gray-900"
                    id="address-heading"
                  >
                    Address
                  </h3>
                  <p
                    className="mt-1 text-gray-600"
                    aria-labelledby="address-heading"
                  >
                    183 Queens Drive, Liverpool, L15 6XU
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3
                    className="text-lg font-medium text-gray-900"
                    id="contact-heading"
                  >
                    Contact
                  </h3>
                  <p
                    className="mt-1 text-gray-600"
                    aria-labelledby="contact-heading"
                  >
                    Email: neilnev@hotmail.com
                  </p>
                  <p
                    className="mt-1 text-gray-600"
                    aria-labelledby="contact-heading"
                  >
                    Tel: 0151-722 3840
                  </p>
                  <p
                    className="mt-1 text-gray-600"
                    aria-labelledby="contact-heading"
                  >
                    Mob: 07946582000
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <img
                    className="w-48 sm:w-64 md:w-60 lg:w-68 xl:w-68 rounded-lg"
                    src={`${process.env.PUBLIC_URL}/accepted-cards.webp`}
                    alt="Accepted cards"
                    aria-label="Accepted payment cards"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
