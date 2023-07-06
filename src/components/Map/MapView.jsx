// import { useEffect } from "react";

// const MapView = () => {
//   console.log("sadsadas");
//   useEffect(() => {
//     let map;

//     function initMap() {
//       let lightMode = {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 10,
//       };

//       let nightMode = {
//         center: { lat: 40.674, lng: -73.945 },
//         zoom: 12,
//         styles: [
//           // Night mode styles
//           // ...
//         ],
//       };

//       map = new google.maps.Map(document.getElementById("map"), lightMode);
//     }

//     window.initMap = initMap;
//   }, []);

//   return (
//     <div class="z-10 h-full w-screen flex-1">
//       <div class="h-full w-full flex-1" id="map"></div>
//     </div>
//   );
// };

// export default MapView;
