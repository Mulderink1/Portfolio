import styles from'./appComponent.module.css';
import LogoSvgComponent from '../../components/logoSvgComponent/LogoSvgComponent.js';
import AboutMeComponent from '../../components/aboutMeComponent/AboutMeComponent.js';
import NavBarComponent from '../../components/navBarComponent/NavBarComponent.js';

const App = () => {
  return (
    <div>
      <div className={styles.loading_spinner}>
        <LogoSvgComponent/>
      </div>
      <NavBarComponent />
      <body>
        <AboutMeComponent />
      </body>
    </div>
  );
}

export default App;
