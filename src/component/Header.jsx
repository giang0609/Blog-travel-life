import React ,{useRef} from "react";
import { Link,useLocation } from "react-router-dom";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Plan",
    path: "/Plan",
  },
  {
    display: "Memory",
    path: "/memory",
  },
 
  {
    display: "About Us",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
       
  const { pathname } = useLocation()
   const activeNar = mainNav.findIndex(e=> e.path === pathname)
  
   const menuList = useRef(null)
   console.log(menuList.current)
    
   const menuToggle = () => menuList.current.classList.toggle('active')

  return (
    <div className="header">
      <div className="header__left">
        <span className="header__left__logo"><Link to="/">Travel</Link></span>
        <span className="header__left__mory">Memory</span>
      </div>
      <div className="header__right" >
        <div className="header__right__mobile" onClick={menuToggle}>
        <i class='bx bx-menu'></i>
        </div>
        <div className="header__right__list" ref={menuList}>
          <div className="header__right__list__close" onClick={menuToggle}>
          <i class='bx bx-right-arrow-alt' ></i>
          </div>
        {mainNav.map((item,index) => (
          <div className={`header__right__list__item ${ index === activeNar ? "active" : ''}`}
          onClick={menuToggle}>
            <Link index={index} to={item.path}>
              {item.display}
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
