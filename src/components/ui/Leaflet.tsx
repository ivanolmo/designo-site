import { MapContainer, Marker, TileLayer } from 'react-leaflet';

interface IProps {
  geolocation: {
    lat: number;
    lng: number;
  };
}

export default function Leaflet({ geolocation }: IProps) {
  const { lat, lng } = geolocation;
  const position: [number, number] = [geolocation.lat, geolocation.lng];

  return (
    <MapContainer
      className='h-96'
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}
