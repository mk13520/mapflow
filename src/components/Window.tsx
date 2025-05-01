
export default function Window() {
  return (
    <>
            {/* 地図左上：チェックボックス表示パネル */}
            <div className="absolute top-20 left-4 z-50 bg-white bg-opacity-90 shadow-md rounded p-3 text-xs w-33">
            <label className="block mb-2">
                <input type="checkbox" className="mr-2" />
                ログ
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" />
                滞在地メッシュ
            </label>
            </div>


            {/* 15分以上情報ウィンドウ */}
            <div className="absolute bottom-[160px] right-2 bg-white bg-opacity-80 shadow-md rounded-md p-2 text-xs z-50 w-24">
            <p className="font-semibold text-gray-700 mb-1 text-[11px]">15分以上</p>
            <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-green-400 mr-1 "></div>
                <span className="text-gray-800 text-[11px]">0</span>
            </div>
            <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-300 mr-1 "></div>
                <span className="text-gray-800 text-[11px]">1</span>
            </div>
            </div>

            {/* 速度情報ウィンドウ */}
            <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 shadow-md rounded-md p-2 text-xs z-50 w-24">
            <p className="font-semibold text-gray-700 mb-1 text-[11px]">速度 (km/h)</p>

            {[
                { color: 'bg-blue-500', label: '[0,5]' },
                { color: 'bg-purple-600', label: '[5,20]' },
                { color: 'bg-pink-500', label: '[20,40]' },
                { color: 'bg-pink-300', label: '[40,60]' },
                { color: 'bg-orange-400', label: '[60,100]' },
                { color: 'bg-yellow-300', label: '[100,300]' },
            ].map((item, index) => (
                <div className="flex items-center mb-1" key={index}>
                <div className={`w-3 h-3 ${item.color} mr-1`}></div>
                <span className="text-[11px]">{item.label}</span>
                </div>
            ))}
            </div>
    </>
  );
}