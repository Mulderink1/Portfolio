import React from 'react';
import styles from './navBarComponent.module.css';
import desktopStyles from './navBarComponent_desktop.module.css';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import HamburgerMenuSvgComponent from '../hamburgerMenuSvgComponent/HamburgerMenuSvgComponent.js';

const NavBarComponent = () => {
  return (
    <header className={window.innerWidth < 600 ? styles.header : `${styles.header} ${desktopStyles.header}`}>
      <section>
        <LogoSvgComponent/>
      </section>
      <section className={styles.hamburger_menu}>
        <HamburgerMenuSvgComponent/>
      </section>
      <nav></nav>
    </header>
  )
}

export default NavBarComponent

