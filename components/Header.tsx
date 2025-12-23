
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="https://m.haiphammaster.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-black text-2xl tracking-tighter flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="bg-brand-red px-2 py-0.5 mr-1 text-[20px]">HẢI</span> PHẠM <span className="text-brand-gold ml-2 font-light oswald-font tracking-widest text-base">MASTER</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-10 text-white font-bold text-[12px] uppercase tracking-[0.25em] oswald-font">
          <a href="https://masterai.calita.vn/topvn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">SỰ KIỆN</a>
          <a href="https://hoc.calita.vn/courses" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">KHÓA HỌC</a>
          <a href="https://masterai.calita.vn/topvn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">HUẤN LUYỆN</a>
          <a href="https://m.haiphammaster.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">VỀ HẢI PHẠM</a>
          <a href="https://masterai.calita.vn/topvn" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-8 py-3.5 rounded-none font-black hover:bg-white hover:text-black transition-all btn-tony uppercase tracking-[0.2em] text-[11px] inline-block">
            BẮT ĐẦU NGAY
          </a>
        </nav>

        <button className="lg:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
