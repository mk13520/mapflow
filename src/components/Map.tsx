  import {MapContainer, TileLayer, CircleMarker, Popup, Polyline, Rectangle} from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import { useEffect, useState } from 'react';
  import { getSpeedColor } from '../components/Color';
  
  export default function Map() {
    const [isClient, setIsClient] = useState(false);
    const [points, setPoints] = useState([]);   //マーカのGPSデータ保持
  
    useEffect(() => {   //Jsonデータ描画
      setIsClient(true);
  
      fetch('/data/sample.json')
        .then((res) => res.json())  //fetch関数でjson読込み
        .then((data) => setPoints(data))    //points格納
        .catch((err) => console.error('JSON 読み込みエラー', err));
    }, []);
  
    if (!isClient) return null;   //ブラウザで描画確定まで表示しない
  

    //滞在地メッシュ南西・北東
    const stayArea = {
      sw: [35.725, 139.75],
      ne: [35.72917, 139.7562],
    };
  
    return (
      <MapContainer center={[35.707, 139.752]} zoom={14} className="w-full h-full z-0">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        {/*2点以上あるとき線でつなぐ*/}
        {points.length > 1 && (
          <Polyline
            positions={points.map((p) => [p.lat, p.lon])}
            pathOptions={{ color: 'red', weight: 2 }}
          />
        )}

        {/*滞在地メッシュ*/}
        <Rectangle
          bounds={[stayArea.sw, stayArea.ne]}
          pathOptions={{
            color: '#00BFFF',
            fillColor: '#00BFFF',
            fillOpacity: 0.3,
            weight: 1
          }}
        />
  
        {/*マーカー*/}
        {points.map((p, i) => (
          <CircleMarker
            key={i}
            center={[p.lat, p.lon]}
            radius={10}
            pathOptions={{
              color: getSpeedColor(p.speed),  //枠線
              fillColor: getSpeedColor(p.speed),  //塗りつぶし
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div className="text-xs">
                <p><strong>device_id </strong> {p.device_id}</p>
                <p><strong>datetime </strong> {p.datetime}</p>
                <p><strong>speed </strong> {p.speed} km/h</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
  
        
      </MapContainer>
    );
  }
  