import { useState } from 'react';
import style from './navBarComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import HamburgerMenuSvgComponent from '../hamburgerMenuSvgComponent/HamburgerMenuSvgComponent.js';
import MobileNavMenuComponent from '../mobileNavMenuComponent/MobileNavMenuComponent.js';

const NavBarComponent = () => {

  const [displayMobileNavMenu, setDisplayMobileNavMenu] = useState(false);

  return (
    <section className={style.nav_bar}>
      <section className={style.logo_section}>
        <LogoSvgComponent parentComponent={window.innerWidth >= 600 ? CONSTANTS.NavBarComponent : null} />
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
            <MobileNavMenuComponent displayMobileNavMenu={displayMobileNavMenu}/>
          </section>
          :
          null
        }
    </section>
  )
}

export default NavBarComponent

