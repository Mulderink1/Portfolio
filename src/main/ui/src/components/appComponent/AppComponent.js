import style from './appComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js'
import BodySectionBlockComponent from '../bodySectionBlockComponent/BodySectionBlockComponent.js';
import LogoSvgComponent from '../logoSvgComponent/LogoSvgComponent.js';
import AboutMeComponent from '../aboutMeComponent/AboutMeComponent.js';
import NavBarComponent from '../navBarComponent/NavBarComponent.js';

const memoize = () => {
  let first = true;
  return () => {
    if (first) {
      const spinner = document.getElementsByClassName(style.loading_spinner)[0];
      spinner.style.display = "none";
    };
    first = false;
  };
};

const memoizeCl = memoize();

window.addEventListener('load', function () {
  setTimeout(() => { window.scrollTo(0, 0) }, 0);
  setTimeout(() => { buildSectionFadeIn() }, CONSTANTS.LoadingSpinnerTime);
});

const buildSectionFadeIn = () => {
  const bodyBlocksArray = document.getElementsByClassName(style.section_blocks)[0].children;
  const windowHeight = window.innerHeight;
  let targetNumber = (0 - windowHeight) + (windowHeight / 8)
  let arrayIndex = 0;
  let error = false;

  bodyBlocksArray[arrayIndex].classList.add('show_body_block_section')
  arrayIndex += 1

  window.addEventListener('scroll', () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > targetNumber + windowHeight && error === false) {
      targetNumber = currentScrollPosition;
      try {
        bodyBlocksArray[arrayIndex].classList.add('show_body_block_section');
      } catch (e) {
        console.log(e)
        error = true;
      }
      arrayIndex += 1;
    }
  });
}


const App = () => {
  setTimeout(() => {
    memoizeCl();
  }, CONSTANTS.LoadingSpinnerTime);

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
