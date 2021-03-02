import './Styles.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Component } from 'react';

var myIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/Leaflet/Leaflet.Icon.Glyph/gh-pages/glyph-marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

class Map extends Component {
  render(){
    const position = [40.7678, -73.9645]
    return (
        <MapContainer className="map" center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    );
  }
}

export default Map;
