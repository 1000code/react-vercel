import React from "react";
import { useGeolocated } from "react-geolocated";

const App = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <p>latitude 17.9706908 longitude 102.613322</p>
      <a
        target="_blank"
        href={`https://www.google.com/maps/?q=${coords.longitude},${coords.longitude}`}
      >
        {coords.latitude} {coords.longitude}
      </a>
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{coords.speed}</td>
          </tr>
        </tbody>
      </table>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default App;
