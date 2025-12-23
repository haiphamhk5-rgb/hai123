
import React, { useState, useEffect } from 'react';
import { generateHeroImage } from '../services/geminiService';

const Hero: React.FC = () => {
  const [heroImg, setHeroImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      const img = await generateHeroImage();
      if (img) setHeroImg(img);
      setLoading(false);
    };
    fetchHero();
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-brand-dark">
      <div className="absolute inset-0">
        {loading ? (
          <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-brand-red/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <img 
            src={heroImg || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"} 
            alt="Hải Phạm Master - Người Lữ Hành" 
            className="w-full h-full object-cover opacity-60 object-center transition-opacity duration-1000 ease-in"
          />
        )}
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6 animate-pulse">
            <span className="w-12 h-[1px] bg-brand-gold"></span>
            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] oswald-font">Tư duy hệ thống & AI thực chiến</span>
          </div>

          <h1 className="text-4xl md:text-[72px] font-black mb-8 leading-[1.0] tracking-tighter uppercase">
            CHẤM DỨT BÍ KHÁCH <br/>
            <span className="text-brand-red">SPA & PHUN XĂM</span> <br/>
            <span className="text-white">BẰNG AI MARKETING</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl font-bold leading-relaxed text-brand-gold oswald-font tracking-wide">
            Tôi giúp bạn xây dựng hệ thống thu hút khách hàng tự động mà không cần thuê đội ngũ marketing hay đốt tiền quảng cáo vô nghĩa.
          </p>

          <p className="text-lg md:text-xl mb-10 max-w-2xl font-medium leading-relaxed opacity-90 border-l-4 border-brand-red pl-6">
            Tôi là Hải Phạm Master. Vai trò của tôi là đồng hành cùng bạn làm chủ công nghệ AI để tự vận hành bộ máy Marketing thực chiến, biến Spa của bạn thành thỏi nam hút khách đều đặn mỗi ngày.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-red"></div>
              <span className="text-sm font-black uppercase tracking-wider">Tự động hóa 80% nội dung</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-red"></div>
              <span className="text-sm font-black uppercase tracking-wider">Quy trình chốt đơn AI</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-red"></div>
              <span className="text-sm font-black uppercase tracking-wider">Làm chủ 100% chiến lược</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://ai.calita.vn/sale" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-red text-white font-black px-12 py-6 text-xl uppercase tracking-widest rounded-none btn-tony shadow-2xl border-2 border-brand-red hover:bg-white hover:text-brand-red inline-block text-center"
            >
              KHÁM PHÁ LỘ TRÌNH AI MARKETING
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 hidden md:block z-20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[2px] bg-brand-gold"></div>
          <span className="oswald-font tracking-widest text-sm text-brand-gold">GIẢI PHÁP THỰC CHIẾN - KẾT QUẢ THẬT</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
