
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import UpcomingEvents from './components/UpcomingEvents';
import Bio from './components/Bio';
import Story from './components/Story';
import Footer from './components/Footer';
import { getDailyMotivation } from './services/geminiService';

const MotivationToast: React.FC = () => {
  const [motivation, setMotivation] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const msg = await getDailyMotivation();
      setMotivation(msg);
      setVisible(true);
    };
    fetch();
    // Đã loại bỏ setTimeout để phần chữ không tự biến mất
  }, []);

  if (!visible || !motivation) return null;

  return (
    <div className="fixed bottom-10 left-6 z-[60] max-w-sm transition-all duration-500 ease-out translate-y-0 opacity-100">
      <div className="bg-brand-red text-white p-6 shadow-2xl relative border-l-4 border-brand-gold">
        <button 
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-white/50 hover:text-white bg-black/20 w-6 h-6 flex items-center justify-center rounded-full transition-colors"
          aria-label="Đóng"
        >
          ✕
        </button>
        <p className="font-black uppercase text-[10px] tracking-[0.3em] mb-3 opacity-70 oswald-font">TƯ DUY AI TỪ HẢI PHẠM:</p>
        <p className="font-bold italic text-lg leading-tight pr-4">"{motivation}"</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Trusted By Section - High Contrast */}
        <section className="py-16 bg-black border-y border-white/10 overflow-hidden">
          <div className="container mx-auto px-6">
            <p className="text-center text-gray-500 font-black uppercase tracking-[0.4em] mb-12 text-[10px] oswald-font">
              ĐÃ ĐỒNG HÀNH CÙNG CÁC CHỦ CƠ SỞ TẠI
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale invert uppercase tracking-tighter font-black">
              <span className="text-3xl text-white italic">Hà Nội</span>
              <span className="text-3xl text-white italic">TP. Hồ Chí Minh</span>
              <span className="text-3xl text-white italic">Đà Nẵng</span>
              <span className="text-3xl text-white italic">Hải Phòng</span>
              <span className="text-3xl text-white italic">Cần Thơ</span>
            </div>
          </div>
        </section>

        <Categories />
        
        {/* Quote Block - Định vị về Hệ Thống & AI */}
        <section className="py-40 bg-brand-gray">
          <div className="container mx-auto px-6 text-center max-w-5xl">
            <svg className="w-20 h-20 text-brand-red mx-auto mb-12 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.899 14.892 16 16.001 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017C11.465 12 11.017 11.552 11.017 11V9C11.017 6.791 12.808 5 15.017 5H19.017C21.226 5 23.017 6.791 23.017 9V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM3.017 21V18C3.017 16.899 3.892 16 5.001 16H8.017C8.569 16 9.017 15.552 9.017 15V9C9.017 8.448 8.569 8 8.017 8H4.017C3.465 8 3.017 8.448 3.017 9V11C3.017 11.552 2.569 12 2.017 12H1.017C0.465 12 0.017 11.552 0.017 11V9C0.017 6.791 1.808 5 4.017 5H8.017C10.226 5 12.017 6.791 12.017 9V15C12.017 18.866 8.883 22 5.017 22H3.017V21Z" />
            </svg>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-brand-black mb-12 italic tracking-tight">
              "Thị trường không tự động thưởng cho người giỏi nhất – mà chỉ thưởng cho người được biết đến nhiều nhất thông qua một hệ thống đúng."
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-8"></div>
            <p className="text-xl font-black uppercase tracking-[0.4em] text-brand-black oswald-font">HẢI PHẠM MASTER</p>
          </div>
        </section>

        <UpcomingEvents />
        <Bio />
        <Story />
        
        {/* Stats Section - Black and Gold */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             <div>
               <div className="text-7xl font-black text-brand-black mb-4">500+</div>
               <div className="text-xs font-black text-brand-red uppercase tracking-[0.3em] oswald-font">CHỦ SPA ĐÃ CHUYỂN ĐỔI AI</div>
             </div>
             <div>
               <div className="text-7xl font-black text-brand-black mb-4">10+</div>
               <div className="text-xs font-black text-brand-red uppercase tracking-[0.3em] oswald-font">NĂM THỰC CHIẾN NGÀNH LÀM ĐẸP</div>
             </div>
             <div>
               <div className="text-7xl font-black text-brand-black mb-4">80%</div>
               <div className="text-xs font-black text-brand-red uppercase tracking-[0.3em] oswald-font">THỜI GIAN ĐƯỢC GIẢI PHÓNG</div>
             </div>
             <div>
               <div className="text-7xl font-black text-brand-black mb-4">24/7</div>
               <div className="text-xs font-black text-brand-red uppercase tracking-[0.3em] oswald-font">HỆ THỐNG RA KHÁCH TỰ ĐỘNG</div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
      <MotivationToast />
    </div>
  );
};

export default App;
