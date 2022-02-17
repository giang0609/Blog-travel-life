import React from "react";
import hagiang from "../assets/images/hagiang.jpg";
import hemtusan from "../assets/images/plan/hemtusan.jpg";
import songnhoque from "../assets/images/plan/songnhoque.jpg";
import mapileng from "../assets/images/plan/mapileng.jpg";

import hight1 from "../assets/images/grid/hight1.jpg";
import hight2 from "../assets/images/grid/hight2.jpg";
import hight3 from "../assets/images/grid/hight3.jpg";
import hight4 from "../assets/images/grid/hight4.jpg";
import low1 from "../assets/images/grid/low1.jpg";
import low2 from "../assets/images/grid/low2.jpg";


const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__header">
        <img src={hagiang} alt="" />
      </div>
      <div className="plan__item">
        <div className="plan__item__left">
          <div className="plan__item__left__image">
              <img src={hemtusan} alt="" />
          </div>
          <div className="plan__item__left__content">
              <h2>Hẻm Tu Sản</h2>
              <p>hẻm vực Tu Sản là cao và sâu nhất nước Việt và có thể là cả Đông Nam Á. Tu Sản được xem là “đệ nhất hùng quan” với chiều cao vách đá lên tới 700–800m, chiều dài tới 1,7km, sâu 700 900m, là danh thắng kỳ vĩ độc nhất của vùng cao nguyên đá Đồng Văn.Thôn Tà Làng nằm sát dòng Nho Quế là nơi sinh sống của 39 hộ các dân tộc Giáy, Tày, Mông, nằm cách xa trung tâm xã, đời sống của người dân nơi đây gần như tách biệt với thế giới bên ngoài. Cuộc sống của họ chủ yếu là đánh bắt cá tôm dưới dòng sông, mỗi năm một vụ lúa và ngô.</p>
          </div>
        </div>
        <div className="plan__item__right">
          <div className="plan__item__right__content">
              <h2>Sông Nho Quế</h2>
              <p>Cùng với Mã Pì Lèng hiểm trở, sông Nho Quế đã trở thành huyền thoại, đi vào thơ ca và là một trong những biểu tượng của Hà Giang. Nho Quế là một trong những con sông đẹp nhất miền hoa đá Hà Giang. Từ trên cao nhìn xuống, dòng sông Nho Quế như sợi chỉ xanh lung linh bắc xuống từ trời, ẩn hiện giữa núi rừng đại ngàn đông bắc.Để đến được vực hẻm Tu Sản du khách cần đi thuyền, cano dịch vụ khoảng 20-30 phút ngược dòng Nho Quế. Hiện nay, có 23 thuyền du lịch hoạt động, mỗi năm đưa đón hàng ngàn lượt khách tham quan, chiêm ngưỡng kỳ quan hùng vĩ này.</p>
          </div>
          <div className="plan__item__right__image">
              <img src={songnhoque} alt="" />
          </div>
        </div>
        <div className="plan__item__left">
          <div className="plan__item__left__image">
              <img src={mapileng} alt="" />
          </div>
          <div className="plan__item__left__content">
              <h2>Mã Pí Lèng</h2>
              <p>hẻm vực Tu Sản là cao và sâu nhất nước Việt và có thể là cả Đông Nam Á. Tu Sản được xem là “đệ nhất hùng quan” với chiều cao vách đá lên tới 700–800m, chiều dài tới 1,7km, sâu 700 900m, là danh thắng kỳ vĩ độc nhất của vùng cao nguyên đá Đồng Văn.Thôn Tà Làng nằm sát dòng Nho Quế là nơi sinh sống của 39 hộ các dân tộc Giáy, Tày, Mông, nằm cách xa trung tâm xã, đời sống của người dân nơi đây gần như tách biệt với thế giới bên ngoài. Cuộc sống của họ chủ yếu là đánh bắt cá tôm dưới dòng sông, mỗi năm một vụ lúa và ngô.</p>
          </div>
        </div>
      </div>
      <div className="deco"></div>
          <div className= "description">
            <p> " Mọi hành trình đều có những điểm đến bí mật mà ngay cả kẻ lữ hành cũng không thể ngờ tới." </p>
             <h5>Martin Buber</h5>
          </div>
          <div className="deco"></div>
          <div className="layout">
            <div className="layout__item"><img src={low2} alt="" /></div>
            <div className="layout__item"><img src={hight1} alt="" /></div>
            <div className="layout__item"><img src={hight2} alt="" /></div>
            <div className="layout__item"><img src={hight3} alt="" /></div>
            <div className="layout__item"><img src={hight4} alt="" /></div>
            <div className="layout__item"><img src={low1} alt="" /></div>
          </div>
          <div className="deco"></div>
    </div>
  );
};

export default Plan;
