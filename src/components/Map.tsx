  import {MapContainer, TileLayer, CircleMarker, Popup, Polyline, Rectangle} from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import { useEffect, useState } from 'react';
  
  export default function Map() {
    const [isClient, setIsClient] = useState(false);
    const [points, setPoints] = useState([]);
  
    useEffect(() => {
      setIsClient(true);
  
      // JSON データを fetch で読み込み
      fetch('/data/sample.json')
        .then((res) => res.json())
        .then((data) => setPoints(data))
        .catch((err) => console.error('JSON 読み込みエラー', err));
    }, []);
  
    if (!isClient) return null;
  
    const stayArea = {
      sw: [35.692, 139.748],
      ne: [35.696, 139.753],
    };
  
    return (
      <MapContainer center={[35.694, 139.753]} zoom={14} className="w-full h-full z-0">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        {/* 線でつなぐ */}
        {points.length > 1 && (
          <Polyline
            positions={points.map((p) => [p.lat, p.lon])}
            pathOptions={{ color: 'red', weight: 2 }}
          />
        )}
  
        {/* マーカー */}
        {points.map((p, i) => (
          <CircleMarker
            key={i}
            center={[p.lat, p.lon]}
            radius={10}
            pathOptions={{
              color: '#800080',
              fillColor: '#800080',
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div className="text-xs">
                <p><strong>ID:</strong> {p.device_id}</p>
                <p><strong>時間:</strong> {p.datetime}</p>
                <p><strong>速度:</strong> {p.speed} km/h</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
  
        {/* 滞在地メッシュ（例） */}
        <Rectangle
          bounds={[stayArea.sw, stayArea.ne]}
          pathOptions={{
            color: '#00BFFF',
            fillColor: '#00BFFF',
            fillOpacity: 0.3,
          }}
        />
      </MapContainer>
    );
  }
  