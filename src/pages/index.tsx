
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-blue-900 text-white p-4 flex items-center space-x-4">
        <select className="text-black p-1 rounded">
          <option>ユーザーA</option>
          <option>ユーザーB</option>
        </select>
        <input
          type="number"
          placeholder="Month"
          className="w-24 p-1 rounded text-black"
        />
        <input
          type="number"
          placeholder="Day"
          className="w-24 p-1 rounded text-black"
        />
      </header>

      <main className="mt-4">
        <div className="bg-white border h-[500px] flex items-center justify-center">
          <p className="text-gray-500">ここにLeaflet地図が入ります</p>
        </div>
      </main>

      <footer className="absolute bottom-4 right-4 space-x-2">
        <button className="bg-red-500 text-white px-3 py-1 rounded">新幹線</button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">高速道路</button>
        <button className="bg-green-500 text-white px-3 py-1 rounded">鉄道</button>
      </footer>
    </div>
  );
}

