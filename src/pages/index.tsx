import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false, // ← window is not defined を防ぐ！
});


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* ヘッダー */}
      <header className="bg-blue-900 text-white p-4 flex items-center space-x-4">
        {/* 名前選択プルダウン */}
        <select className="text-black p-1 rounded">
          <option>ユーザー1</option>
          <option>ユーザー2</option>
        </select>

        {/* 月の入力 */}
        <input
          type="number"
          placeholder="Month"
          className="w-24 p-1 rounded text-black"
        />

        {/* 日の入力 */}
        <input
          type="number"
          placeholder="Day"
          className="w-24 p-1 rounded text-black"
        />
      </header>


      {/* メインに地図 */}
      <main className=" relative h-[600px]" >
        <Map />
      

      {/* 交通手段ボタン（右下に縦並び） */}
      <div className="absolute bottom-4 right-4 z-50 flex flex-col space-y-2">
        <button className="bg-red-500 text-white w-28 h-10 rounded">新幹線</button>
        <button className="bg-blue-500 text-white w-28 h-10 rounded">高速道路</button>
        <button className="bg-green-500 text-white w-28 h-10 rounded">鉄道</button>
      </div>
      </main>
    </div>
  );
}
 


