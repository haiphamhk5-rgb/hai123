
import React from 'react';

const EventCard: React.FC<{ title: string, description: string, date: string, location: string, img: string, link: string }> = ({ title, description, date, location, img, link }) => (
  <div className="relative overflow-hidden group border border-gray-800 bg-black">
    <div className="h-[600px] overflow-hidden relative">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    </div>
    
    <div className="absolute inset-0 p-10 flex flex-col justify-end text-white pointer-events-none">
      <div className="transform translate-y-12 group-hover:translate-y-0 transition-all duration-700 ease-out">
        <div className="flex items-center gap-3 mb-4">
           <span className="bg-brand-red text-white px-3 py-1 text-[10px] font-black tracking-widest oswald-font">
             {location}
           </span>
           <span className="text-brand-gold font-black tracking-[0.3em] uppercase text-xs oswald-font">
             {date}
           </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-6 leading-[1.1] uppercase tracking-tighter group-hover:text-brand-red transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xl">
          {description}
        </p>
        <div className="pointer-events-auto">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-red text-white px-12 py-5 font-black uppercase tracking-[0.25em] text-xs hover:bg-white hover:text-black transition-all inline-block btn-tony oswald-font"
          >
            GIỮ CHỖ NGAY
          </a>
        </div>
      </div>
    </div>
  </div>
);

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden" id="events">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-3xl">
            <span className="text-brand-red font-black text-sm mb-6 block tracking-[0.5em] oswald-font uppercase">Huấn luyện thực chiến</span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tighter uppercase">
              SỰ KIỆN <br/><span className="text-brand-gold">ĐỘT PHÁ 2026</span>
            </h2>
            <div className="w-20 h-2 bg-brand-red mb-8"></div>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Lộ trình thực chiến giúp các chủ doanh nghiệp và chủ Spa làm chủ công nghệ, xây dựng hệ thống tự động để dẫn đầu thị trường.
            </p>
          </div>
          <a href="https://masterai.calita.vn/topvn" target="_blank" rel="noopener noreferrer" className="mt-12 md:mt-0 text-white font-black uppercase tracking-[0.3em] border-b-2 border-brand-red pb-3 hover:text-brand-gold hover:border-brand-gold transition-all oswald-font text-sm flex items-center group">
            XEM LỊCH CHI TIẾT 
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <EventCard 
            title="LÀM CHỦ AI – XÂY DỰNG TƯƠNG LAI"
            description="Khai phá sức mạnh Trí tuệ nhân tạo để giải phóng 80% Marketing thủ công. Lộ trình thực chiến dành riêng cho chủ Spa làm chủ công nghệ thu hút khách hàng tự động, bứt phá doanh thu mà không phụ thuộc nhân sự."
            date="QUY MÔ TOÀN QUỐC"
            location="ONLINE - OFFLINE"
            img="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
            link="https://ai.calita.vn/sale"
          />
          <EventCard 
            title="HỆ THỐNG BÁN HÀNG TỰ DO"
            description="Chấm dứt tình trạng 'làm nô lệ cho chính cơ sở của mình'. Xây dựng phễu bán hàng khép kín vận hành 24/7, biến mỗi lượt truy cập thành một lịch hẹn tư vấn thành công ngay cả khi bạn đang ngủ."
            date="CHIẾN LƯỢC ĐỘT PHÁ"
            location="ONLINE - OFFLINE"
            img="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
            link="https://masterai.calita.vn/topvn"
          />
          <EventCard 
            title="XÂY DỰNG THƯƠNG HIỆU CÁ NHÂN"
            description="CALITA BRANDS OS: Hệ điều hành xây dựng nhân hiệu tối ưu cho nhà đào tạo muốn dẫn đầu thị trường. Định vị giá trị bản thân, tạo sức hút tự nhiên và uy tín tuyệt đối để khách hàng tự tìm đến."
            date="ADVANCED TRAINING"
            location="ONLINE - OFFLINE"
            img="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000"
            link="https://masterai.calita.vn/topvn"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
