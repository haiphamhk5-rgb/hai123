
import React, { useState, useEffect } from 'react';
import { generateBioPortrait } from '../services/geminiService';

const Bio: React.FC = () => {
  const [aiImage, setAiImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const img = await generateBioPortrait();
      if (img) {
        setAiImage(img);
      }
      setLoading(false);
    };
    fetchImage();
  }, []);

  return (
    <section className="py-32 bg-brand-black text-white overflow-hidden relative" id="vision">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-red opacity-[0.02] -skew-x-12 translate-x-20"></div>
      <div className="absolute top-40 left-10 w-1 h-32 bg-gradient-to-b from-brand-gold/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-32">
          
          {/* LEFT: IMAGE & IDENTITY */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="relative group mb-12">
              {/* Luxury Frame Overlay */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-brand-gold/30 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-brand-red/30 z-0"></div>
              
              <div className="relative z-10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] bg-zinc-900 aspect-[3/4]">
                {loading ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 animate-pulse">
                    <div className="w-10 h-10 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="oswald-font text-[9px] tracking-[0.4em] text-gray-600">GENERATING MASTER IDENTITY...</p>
                  </div>
                ) : (
                  <img 
                    src={aiImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"} 
                    alt="Hải Phạm Master AI Portrait" 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale hover:grayscale-0 filter brightness-[0.9] contrast-[1.2]"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
            </div>

            {/* IDENTITY BLOCK - SANG TRỌNG & TINH TẾ */}
            <div className="space-y-2 border-l-2 border-brand-gold/40 pl-8 py-2">
              <h3 className="text-3xl font-black tracking-tight uppercase oswald-font text-white">
                HẢI PHẠM <span className="text-brand-gold">MASTER</span>
              </h3>
              <p className="text-brand-gold font-medium tracking-[0.3em] text-xs oswald-font opacity-80">
                Founder – Calita Group
              </p>
              <div className="pt-6">
                <p className="text-gray-400 italic text-lg leading-relaxed max-w-xs font-light">
                  "Tôi cùng bạn thiết lập những hệ thống chuẩn xác cho hành trình bền vững."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: VISION & MISSION CONTENT */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-4 mb-12">
              <span className="text-brand-red font-black text-xs block tracking-[0.6em] oswald-font uppercase">STRATEGIC VISION</span>
              <div className="w-20 h-[1px] bg-brand-red/50"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-16 leading-[0.9] tracking-tighter uppercase">
              TẦM NHÌN <br/>
              <span className="text-brand-gold">& CHIẾN LƯỢC</span>
            </h2>
            
            <div className="space-y-16">
              {/* Mission Statement 1 */}
              <div className="relative">
                <span className="absolute -left-8 top-0 text-brand-red/20 font-black text-6xl oswald-font leading-none select-none">01</span>
                <div className="pl-6 border-l-[1px] border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                    Khai phá sức mạnh hệ thống
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Tôi tin rằng vấn đề lớn nhất của đa số chủ spa không nằm ở tay nghề, mà nằm ở việc 
                    <span className="text-white border-b border-brand-red ml-1">không có hệ thống vận hành chuẩn xác</span>. 
                    Hệ thống là thứ duy nhất giúp bạn bứt phá mà không bị kiệt sức.
                  </p>
                </div>
              </div>

              {/* Mission Statement 2 */}
              <div className="relative">
                <span className="absolute -left-8 top-0 text-brand-red/20 font-black text-6xl oswald-font leading-none select-none">02</span>
                <div className="pl-6 border-l-[1px] border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
                    Làm chủ công nghệ thực chiến
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Sứ mệnh của tôi là giúp con người làm chủ AI để giải phóng 80% thời gian cho những việc lặp lại vô nghĩa. 
                    Bạn dạy AI làm việc, để bạn có thời gian làm <span className="italic text-brand-gold">người dẫn đường</span> thực thụ.
                  </p>
                </div>
              </div>

              {/* Final Vision */}
              <div className="pt-8 mt-8 border-t border-white/5">
                <p className="text-xl font-bold text-brand-gold italic leading-snug tracking-wide">
                  Kiến tạo một thế hệ doanh nhân mới: Am hiểu công nghệ, làm chủ tư duy hệ thống và xây dựng giá trị bền vững cho cộng đồng.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 mt-20">
              <a 
                href="https://ai.calita.vn/sale" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden bg-brand-red text-white font-black px-14 py-6 uppercase tracking-[0.2em] transition-all text-sm oswald-font inline-block text-center shadow-[0_20px_60px_rgba(227,27,35,0.3)] hover:shadow-brand-red/40"
              >
                <span className="relative z-10">BẮT ĐẦU HÀNH TRÌNH AI</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">XEM LỘ TRÌNH NGAY</span>
              </a>
              
              <a 
                href="https://calita.vn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent border border-white/30 text-white font-black px-14 py-6 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all text-sm oswald-font inline-block text-center"
              >
                HỆ SINH THÁI CALITA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
