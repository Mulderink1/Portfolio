import styles from'./appComponent.module.css';
import LogoSvgComponent from '../../components/logoSvgComponent/LogoSvgComponent.js';
import AboutMeComponent from '../../components/aboutMeComponent/AboutMeComponent.js';
import NavBarComponent from '../../components/navBarComponent/NavBarComponent.js';

const App = () => {
  return (
    <div className={styles.app_component}>
      <section className={styles.loading_spinner}>
        <LogoSvgComponent/>
      </section>
      <NavBarComponent />
      <AboutMeComponent />
    </div>
  );
}

export default App;
