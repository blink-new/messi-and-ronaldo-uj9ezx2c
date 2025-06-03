import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-arabic" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">ميسي ورونالدو</h1>
          <p className="text-xl text-gray-700">مقارنة بين أعظم لاعبين في التاريخ</p>
        </header>

        {/* Player Cards Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Messi Card Placeholder */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4">ليونيل ميسي</h2>
            <p>هنا ستكون معلومات عن ميسي...</p>
          </div>

          {/* Ronaldo Card Placeholder */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4">كريستيانو رونالدو</h2>
            <p>هنا ستكون معلومات عن رونالدو...</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
