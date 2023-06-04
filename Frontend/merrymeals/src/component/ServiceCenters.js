import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import locationService from "../service/LocationService";
import LoadingSpinner from "./Loading";

const ServiceCenters = () => {
  const [serviceCenters, setServiceCenters] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeP41nTw8QroOfvcCFR9bKIC-GUW7BLcs",
  });

  const fetchServiceCenter = async () => {
    locationService.getServiceCenter().then((response) => {
      setServiceCenters(response.data);
    });
  };

  useEffect(() => {
    fetchServiceCenter();
  }, []);

  const containerStyle = {
    width: "800px",
    height: "800px",
  };

  const center = {
    lat: 1.362647,
    lng: 103.803564,
  };

  if (!isLoaded) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container text-center">
      {console.log(serviceCenters)}
      <div className="py-5 d-flex justify-content-center align-items-center">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {serviceCenters.map((serviceCenter) => (
            <Marker
              position={{
                lat: parseFloat(serviceCenter.scLatitude),
                lng: parseFloat(serviceCenter.scLongitude),
              }}
              label={serviceCenter.scName}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default ServiceCenters;
