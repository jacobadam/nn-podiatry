import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "480px",
};
const center = {
  lat: 53.39627456665039,
  lng: -2.897101402282715,
};

export default function Location() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="w-full h-40">
        <img
          src="pebble-footprint.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Location</h2>
          <p className="mt-4 text-lg text-gray-500">
            The surgery is two doors down from the Wetherspoons (Childwall
            Fiveways Hotel) and opposite Grosvenor Court. Parking is sometimes
            available on the drive outside the surgery or paid parking is
            available in the Wetherspoons car park.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
              >
                <MarkerF position={center} />
              </GoogleMap>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">
                    183 Queens Drive, Liverpool, L15 6XU
                  </p>
                </div>

                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    Email: neilnev@hotmail.com
                  </p>
                  <p className="mt-1 text-gray-600">Tel: 0151-722 3840</p>
                  <p className="mt-1 text-gray-600">Mob: 07946582000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
