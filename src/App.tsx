import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gold-100 text-gray-900 font-arabic" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">ميسي ورونالدو</h1>
          <p className="text-2xl text-gray-700">مقارنة بين أعظم لاعبين في التاريخ</p>
        </header>

        {/* Player Cards Section */}
        <section className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Messi Card */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjI1NzV8MHwxfHNlYXJjaHwxfHxNZXNzaXxlbnwwfHx8fDE3MTY3NTY3ODd8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Lionel Messi"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">ليونيل ميسي</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                ليونيل ميسي هو لاعب كرة قدم أرجنتيني يعتبر على نطاق واسع أحد أعظم اللاعبين في كل العصور. قضى معظم مسيرته في برشلونة، حيث فاز بالعديد من الألقاب، بما في ذلك دوري أبطال أوروبا والكرة الذهبية عدة مرات.
              </p>
              {/* Add more stats/info here later */}
            </div>
          </div>

          {/* Ronaldo Card */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
             <img 
              src="https://images.unsplash.com/photo-1550399105-c4db5fc921bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjI1NzV8MHwxfHxSb25hbGRvfGVufDB8fHx8MTcxNjc1NjgxMHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Cristiano Ronaldo"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold text-gold-800 mb-4">كريستيانو رونالدو</h2>
              <p className="text-gray-700 mb-4 flex-grow">
                كريستيانو رونالدو هو لاعب كرة قدم برتغالي مشهور بلياقته البدنية المذهلة وقدرته على تسجيل الأهداف. لعب لأندية كبرى مثل مانشستر يونايتد وريال مدريد ويوفنتوس، وحقق العديد من الأرقام القياسية والألقاب.
              </p>
              {/* Add more stats/info here later */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
