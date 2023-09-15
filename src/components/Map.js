import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
const defaultIcon = new L.Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});
L.Marker.prototype.options.icon = defaultIcon;
export default function Map() {
  return (
    <>
      <MapContainer
        center={[30.180117, 31.215253]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[30.180117, 31.215253]}>
          <Popup className="text-center">
            E.I.T Software company. <br /> our location.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
