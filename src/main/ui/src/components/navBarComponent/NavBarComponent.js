import { useState } from 'react';
import style from './navBarComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import HamburgerMenuSvgComponent from '../hamburgerMenuSvgComponent/HamburgerMenuSvgComponent.js';
import MobileNavMenuComponent from '../mobileNavMenuComponent/MobileNavMenuComponent.js';

const NavBarComponent = () => {
  const [displayMobileNavMenu, setDisplayMobileNavMenu] = useState(false);

  let previousScrollposition = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    let htmlBlock = document.getElementsByClassName(style.nav_bar)[0];

    previousScrollposition > currentScrollPosition ? htmlBlock.style.top = '0' : htmlBlock.style.top = '-100px';
    previousScrollposition = currentScrollPosition;
  });

  return (
    <section className={style.nav_bar}>
      <section className={style.logo_section}>
        <section onClick={() => {
            displayMobileNavMenu
              ?
              setDisplayMobileNavMenu(false)
              :
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
          }
        }>
          <LogoSvgComponent parentComponent={window.innerWidth >= 600 ? CONSTANTS.NavBarComponent : null} />
        </section>
      </section>
      <section className={style.hamburger_menu_svg_section}>
        {
          window.innerWidth < 600
            ?
            <HamburgerMenuSvgComponent displayMobileNavMenu={displayMobileNavMenu}
              setDisplayMobileNavMenu={setDisplayMobileNavMenu}
            />
            :
            null
        }
      </section>
      {
        window.innerWidth < 600 ?
          <section className={`${style.mobile_nav_menu_section} ${displayMobileNavMenu === false ? style.hide_mobile_blur : style.display_mobile_blur}`} >
            <MobileNavMenuComponent displayMobileNavMenu={displayMobileNavMenu} setDisplayMobileNavMenu={setDisplayMobileNavMenu}/>
          </section>
          :
          null
        }
    </section>
  )
}

export default NavBarComponent

