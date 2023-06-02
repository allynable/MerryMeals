import { toast } from 'react-toastify';
var geocoder = new window.google.maps.Geocoder();

export function reverseGeocode(latitude, longitude) {
  return new Promise((resolve, reject) => {
    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);

    if (isNaN(lat) || isNaN(long)) {
      toast.error("Please enter valid coordinates.");
      reject("Please enter valid coordinates.");
      return;
    }

    const location = new window.google.maps.LatLng(lat, long);

    geocoder.geocode({ location }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          const formattedAddress = results[0].formatted_address;
          const modifiedAddress = formattedAddress.replace(/\s\w+\+\w+/g, "");
          resolve(modifiedAddress);
        } else {
          toast.error("No results found.");
          reject("No results found.");
        }
      } else {
        toast.error("Please enter a valid address!");
        reject("Please enter a valid address!");
      }
    });
  });
}