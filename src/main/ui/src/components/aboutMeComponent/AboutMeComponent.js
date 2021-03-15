import style from './aboutMeComponent.module.css';

const AboutMeComponent = () => {
  return (
    <section className={style.about_me_component}>
      <section className={style.name_title_section}>
        <h2>
          Mike Mulderink
        </h2>
        <h3>
          Software Engineer / Web Developer
        </h3>
      </section>
      <section>
        <p>
          Add so SHit About Me. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </section>
  )
}

export default AboutMeComponent