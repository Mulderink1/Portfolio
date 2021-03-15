import style from './mobileNavMenuComponent.module.css';
import TextATagComponent from '../textATagComponent/TextATagComponent';

const MobileNavMenuComponent = () => {
  return (
    <nav className={style.mobile_nav_menu_nav_component}>
      <ul>
        <li>
          <TextATagComponent text={'Mike'}/>
        </li>
        <li>
          <TextATagComponent text={'Contact'} />
        </li>
        <li>
          <TextATagComponent text={'Skills'} />
        </li>
        <li>
          <TextATagComponent text={'Work'} />
        </li>
        <li>
          <TextATagComponent text={'Projects'} />
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavMenuComponent