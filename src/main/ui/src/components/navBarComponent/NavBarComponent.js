import styles from './navBarComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import HamburgerMenuSvgComponent from '../hamburgerMenuSvgComponent/HamburgerMenuSvgComponent.js';

const NavBarComponent = () => {
  return (
    <nav className={styles.nav_bar}>
      <ul>
        <li>
          <LogoSvgComponent parentComponent={window.innerWidth >= 600 ? CONSTANTS.NavBarComponent : null}/>
        </li>
        <li>
          <HamburgerMenuSvgComponent/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent

