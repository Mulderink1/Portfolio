import React from 'react';
import Logo from '../../MMLogo.svg';
import styles from './navBarComponent.module.css';
import HamburgerMenu from '../../HamburgerMenu.svg';

const NavBarComponent = () => {
  return (
    <header className={styles.header}>
      <section>
        <img src={Logo}/>
      </section>
      <section className={styles.hamburger_menu}>
        <img src={HamburgerMenu}/>
      </section>
      <nav></nav>
    </header>
  )
}

export default NavBarComponent