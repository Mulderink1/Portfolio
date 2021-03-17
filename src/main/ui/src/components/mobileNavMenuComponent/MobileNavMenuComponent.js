import style from './mobileNavMenuComponent.module.css';
import TextATagComponent from '../textATagComponent/TextATagComponent';
import uuid from 'react-uuid';

const MobileNavMenuComponent = ({ displayMobileNavMenu, setDisplayMobileNavMenu }) => {
  const navLinksArray = [];
  const links = [];

  function linksProto(text, href) {
    this.text = text;
    this.href = href;
    linksProto.prototype.hrefOnClickFunction = () => { setDisplayMobileNavMenu(false) };
  }

  links.push(new linksProto('About Me', '#about_me'));
  links.push(new linksProto('Contact', '#about_me'));
  links.push(new linksProto('Skills', '#about_me'));
  links.push(new linksProto('Work', '#about_me'));
  links.push(new linksProto('Projects', '#about_me'));

  links.forEach(el => {
    navLinksArray.push(
      <li key={uuid()}>
        <TextATagComponent hrefOnClickFunction={linksProto.prototype.hrefOnClickFunction} setDisplayMobileNavMenu={setDisplayMobileNavMenu} text={el.text} href={el.href} />
      </li>
    )
  });

  return (
    <nav className={`${style.mobile_nav_menu_nav_component} ${displayMobileNavMenu === false ? style.hide_mobile_nav_menu : style.display_mobile_nav_menu}`}>
      <ul>
        {navLinksArray}
      </ul>
    </nav>
  )
}

export default MobileNavMenuComponent