import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // クライアント側でのみ描画する
  }, []);

  if (!isClient) return null; // サーバー側では描画しない

  return (
    <MapContainer
      center={[35.681, 139.767]} // 東京駅
      zoom={13}
      className="w-full h-[500px]"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.681, 139.767]}>
        <Popup>東京駅</Popup>
      </Marker>
    </MapContainer>
  );
}



