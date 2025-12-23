
import React from 'react';

const Footer: React.FC = () => {
  const LEAD_LINK = "https://masterai.calita.vn/topvn";
  
  const SOCIAL_LINKS = [
    { name: 'Facebook', url: 'https://www.facebook.com/masterhaipham' },
    { name: 'Fanpage', url: 'https://www.facebook.com/masterhaiphamcalita' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Haipham_master' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@master_hai_pham' },
    { name: 'Instagram', url: 'https://www.instagram.com/haipham_master/' },
    { name: 'X', url: 'https://x.com/Haiphammaster' }
  ];

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(LEAD_LINK, '_blank');
  };

  return (
    <footer className="bg-brand-black text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* TOP SECTION: AUTHORITY & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          
          {/* Brand Identity & Socials */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <a 
                href="https://m.haiphammaster.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl font-black tracking-tighter flex items-center mb-6"
              >
                <span className="bg-brand-red px-2 py-0.5 mr-1 text-[24px]">HẢI</span> PHẠM <span className="text-brand-gold ml-2 font-light oswald-font tracking-[0.2em] text-lg">MASTER</span>
              </a>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
                Đồng hành cùng cộng đồng Spa & Phun xăm làm chủ công nghệ AI, xây dựng hệ thống Marketing thực chiến và định vị thương hiệu cá nhân bền vững.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-brand-gold font-black text-[10px] tracking-[0.3em] oswald-font uppercase">Kết nối đa kênh</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {SOCIAL_LINKS.map(social => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors uppercase text-[11px] font-black tracking-widest oswald-font border-b border-transparent hover:border-brand-red pb-1"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Newsletter - The Lead Magnet */}
          <div className="lg:col-span-8 bg-white/5 p-10 md:p-16 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-10 blur-[80px]"></div>
            
            <div className="relative z-10">
              <span className="text-brand-gold font-black text-sm mb-4 block tracking-[0.4em] oswald-font uppercase">Nội dung độc quyền</span>
              <h4 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                THƯ CHIẾN LƯỢC TỪ <br/>
                <span className="text-brand-red">HẢI PHẠM MASTER</span>
              </h4>
              <p className="text-gray-400 text-xl mb-10 max-w-2xl leading-relaxed font-medium">
                Nhận những góc nhìn chuyên sâu về AI, Marketing và Thương hiệu cá nhân thực chiến. Bài học rút ra từ 10 năm kinh nghiệm trong ngành làm đẹp. Không sáo rỗng.
              </p>

              <form onSubmit={handleRedirect} className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="flex-grow bg-black/50 border border-white/20 p-5 focus:border-brand-gold outline-none text-white font-medium placeholder:text-gray-600 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="bg-brand-red text-white font-black px-12 py-5 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all btn-tony text-sm oswald-font shadow-[0_10px_40px_rgba(227,27,35,0.3)]"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </form>
              <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                Bạn sẽ được dẫn trực tiếp đến cổng đăng ký thư chiến lược chính thức.
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: QUICK LINKS & CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16 mb-16">
          <div>
            <h5 className="font-black uppercase tracking-[0.2em] mb-8 text-brand-gold text-xs oswald-font">ĐÀO TẠO</h5>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase">
              <li><a href="https://hoc.calita.vn/courses" target="_blank" className="hover:text-white transition-colors">Khóa học AI Master</a></li>
              <li><a href="https://masterai.calita.vn/topvn" target="_blank" className="hover:text-white transition-colors">Sự kiện Offline</a></li>
              <li><a href="https://ai.calita.vn/sale" target="_blank" className="hover:text-white transition-colors">Lộ trình 1:1</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-[0.2em] mb-8 text-brand-gold text-xs oswald-font">HỆ SINH THÁI</h5>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase">
              <li><a href="https://calita.vn" target="_blank" className="hover:text-white transition-colors">Calita Academy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Prompt Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cộng đồng thực chiến</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-[0.2em] mb-8 text-brand-gold text-xs oswald-font">THÔNG TIN</h5>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase">
              <li><a href="https://m.haiphammaster.com/" target="_blank" className="hover:text-white transition-colors">Về Hải Phạm</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Câu chuyện thương hiệu</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Lịch sự kiện 2026</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-black uppercase tracking-[0.2em] mb-8 text-brand-gold text-xs oswald-font">LIÊN HỆ TRỰC TIẾP</h5>
            <div className="space-y-4 text-gray-500 text-sm font-bold leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="text-brand-red text-xs uppercase oswald-font">Hotline:</span>
                <span className="text-white">0978085789</span>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-brand-red text-xs uppercase oswald-font">Email:</span>
                <span className="text-white lowercase">Calitagroup@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 pt-4">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Hà Nội - TP. Hồ Chí Minh</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] oswald-font">
            &copy; {new Date().getFullYear()} HẢI PHẠM MASTER. THIẾT KẾ ĐỊNH VỊ THƯƠNG HIỆU BỞI CALITA.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] oswald-font transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] oswald-font transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
