
const ACCESS_TOKEN = process.env.MAPBOX_TOKEN;
const MAPBOX_STYLE =
  "mapbox://styles/aleksandrabard/ckbgpvc4i3br31imyho0ts2ks/draft";

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: "map",
  style: MAPBOX_STYLE,
  center: [-74.009, 40.705],
  zoom: 13,
});

function markerMaker(type, coordinates) {
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  if (type === "park") {
    marker.style.backgroundImage = "url(https://cdn2.iconfinder.com/data/icons/map-pins-1-01-easylines/128/yumminky-pin-46-512.png)";
  } else if (type === "hotel") {
    marker.style.backgroundImage = "url(https://cdn0.iconfinder.com/data/icons/travel-vacation/289/travel-transport-hotel-vacation-holidays-tourist-tourism-travelling-traveling_147-512.png)";
  } else {
    marker.style.backgroundImage = "url(https://cdn0.iconfinder.com/data/icons/travel-vacation/290/travel-transport-hotel-vacation-holidays-tourist-tourism-travelling-traveling_149-512.png)";
  }
  return new mapboxgl.Marker(marker).setLngLat(coordinates);
}

const marker = markerMaker("hotel", [-73.99922005786658, 40.71498452428341]);
marker.addTo(map);

const marker1 = markerMaker("park", [-74.0156295643535, 40.70299397806963]);
marker1.addTo(map);

const marker2 = markerMaker("restaurant", [-74.009, 40.705]);
marker2.addTo(map);
