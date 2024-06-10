import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
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
    <div>
      <h1>Location</h1>
      <div>
        <h1>Address</h1>
        <p>183 Queens Drive</p>
        <p>Wavertree</p>
        <p>Liverpool, L15 6XU</p>

        <p>
          The surgery is next door but one to the Weatherspoons Pub on the
          Childwall Fiveways roundabout (formerly the Childwall Fiveways pub).
          It is opposite Grosvenor Court and a small group of shops (including
          Elif restaurant).
        </p>

        <p>
          Parking is sometimes available on the drive outside the surgery,
          otherwise parking is available in the pub car park (Please note that
          the pub car park is "pay and display" car park. The charge is 50p).
        </p>
      </div>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}
