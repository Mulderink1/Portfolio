import { useEffect } from 'react';
import { buildSectionFadeIn } from '../../HelperFunctions.js';
import style from './appComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js'
import BodySectionBlockComponent from '../bodySectionBlockComponent/BodySectionBlockComponent.js';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import AboutMeComponent from '../aboutMeComponent/AboutMeComponent.js';
import NavBarComponent from '../navBarComponent/NavBarComponent.js';


const App = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    setTimeout(() => {
      const spinner = document.getElementsByClassName(style.loading_spinner)[0];
      spinner.style.display = "none";
      buildSectionFadeIn(style);
    }, CONSTANTS.LoadingSpinnerTime);
  }, []);

  return (
    <div className={style.app_component}>
      <section className={style.loading_spinner}>
        <LogoSvgComponent/>
      </section>
      <section>
        <NavBarComponent />
        <section className={style.section_blocks}>
          <BodySectionBlockComponent id={'about_me'} AboutMeComponent={<AboutMeComponent />} />
          <BodySectionBlockComponent AboutMeComponent={<AboutMeComponent />} />
          <BodySectionBlockComponent AboutMeComponent={<AboutMeComponent />} />
          <BodySectionBlockComponent AboutMeComponent={<AboutMeComponent />} />
        </section>
      </section>
    </div>
  );
}

export default App;
