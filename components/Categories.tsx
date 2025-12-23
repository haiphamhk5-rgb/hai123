
import React from 'react';

const CategoryCard: React.FC<{ title: string; description: string; affirmation: string; icon: string; link: string }> = ({ title, description, affirmation, icon, link }) => (
  <div className="bg-white p-14 border border-gray-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden flex flex-col h-full">
    <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="text-brand-black text-6xl mb-10 group-hover:scale-110 transition-transform duration-300 opacity-20 group-hover:opacity-100 oswald-font font-black">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-6 text-brand-black leading-tight uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg mb-6 font-medium">
      {description}
    </p>
    <p className="text-brand-black font-bold italic mb-10 border-l-4 border-brand-red pl-4 py-2 bg-gray-50 text-base">
      {affirmation}
    </p>
    <div className="mt-auto">
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-brand-red font-black text-[13px] uppercase tracking-[0.25em] oswald-font group-hover:translate-x-3 transition-transform"
      >
        TÌM HIỂU GIẢI PHÁP
        <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-brand-black mb-6 leading-[0.9] uppercase tracking-tighter">
            VẤN ĐỀ NÀO ĐANG CẢN TRỞ <br/> SPA CỦA BẠN PHÁT TRIỂN?
          </h2>
          <div className="w-24 h-2 bg-brand-red mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-100">
          <div className="border-r border-b border-gray-100">
            <CategoryCard 
              icon="01"
              title="GIỎI TAY NGHỀ NHƯNG VẮNG KHÁCH" 
              description="Bạn phun xăm đẹp, điều trị da tốt nhưng fanpage không ai tương tác, giường spa bỏ trống nhiều giờ trong ngày. Mọi nỗ lực giảm giá hay đăng bài theo cảm hứng đều không mang lại lượng khách ổn định như mong đợi."
              affirmation="Tôi giúp bạn định vị lại thương hiệu và tiếp cận đúng đối tượng khách hàng sẵn sàng chi trả cho chất lượng."
              link="https://ai.calita.vn/sale"
            />
          </div>
          <div className="border-r border-b border-gray-100">
            <CategoryCard 
              icon="02"
              title="MUỐN TỰ LÀM MARKETING BẰNG AI" 
              description="Bạn mệt mỏi vì thuê agency đắt đỏ nhưng không hiểu ngành làm đẹp, hoặc tự mày mò làm nội dung nhưng mất quá nhiều thời gian. Bạn cần một công cụ thông minh thay thế nhân sự để tập trung hoàn toàn vào chuyên môn."
              affirmation="Tôi huấn luyện bạn sử dụng AI để tự động hóa 80% khâu viết bài, làm video và kịch bản tư vấn chỉ trong vài phút."
              link="https://ai.calita.vn/sale"
            />
          </div>
          <div className="border-r border-b border-gray-100">
            <CategoryCard 
              icon="03"
              title="XÂY DỰNG HỆ THỐNG RA KHÁCH BỀN VỮNG" 
              description="Bạn không muốn phụ thuộc vào may rủi hay những đợt đốt tiền quảng cáo tốn kém. Bạn khao khát một quy trình từ thu hút, tư vấn đến chăm sóc khách cũ quay lại một cách tự động và chuyên nghiệp."
              affirmation="Tôi đồng hành cùng bạn thiết lập cỗ máy Marketing thực chiến, giúp Spa vận hành trơn tru và có dòng khách đều đặn mỗi tháng."
              link="https://ai.calita.vn/sale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
