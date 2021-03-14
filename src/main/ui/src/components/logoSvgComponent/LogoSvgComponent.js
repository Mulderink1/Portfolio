import styles from './logoSvgComponent.module.css';
import CONSTANTS from '../../CONSTANTS.js';
import navBarComponentDesktopAnimationStyles from './navBarComponent_desktop_hover_animation.module.css';

const LogoSvgComponent = props => {
  return (
    <svg className={props.parentComponent === CONSTANTS.NavBarComponent ? `${navBarComponentDesktopAnimationStyles.header_logo_desktop_animation}` : null} xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200" >
      <g id="Layer_1">
        <g>
          <g>
          </g>
        </g>
        <g>
          <g>
            <path className={styles.st0} d="M73.69,121.68v-1.78c6.98-0.62,7.26-1.07,7.22-8.09L81,83.85c-7.05,12.31-18.38,31.71-21.53,37.83h-2.08
              c-2.93-6.06-12.28-23.93-19.38-37.15c-1.37,23.7-1.42,28.68-1.42,30.39c0.08,3.76,2.03,4.46,8.14,4.98v1.78H24.32v-1.78
              c5.21-0.44,7.13-1.32,7.78-5.02c0.47-2.82,0.62-5.71,2.75-30.29c0.3-3.33-0.45-4.7-8.09-5.27v-1.78h15.37l18.98,33.95
              l20.24-33.95h15.32v1.78c-7.41,0.7-8.27,1.31-8.13,6.44l0.36,26.05c0.27,7.04,0.62,7.4,8.08,8.09v1.78H73.69z"/>
            <path className={styles.st0} d="M151.55,121.68v-1.78c6.99-0.62,7.26-1.07,7.22-8.09l0.1-27.96c-7.05,12.31-18.38,31.71-21.53,37.83h-2.08
              c-2.93-6.06-12.28-23.93-19.38-37.15c-1.37,23.7-1.42,28.68-1.42,30.39c0.08,3.76,2.03,4.46,8.14,4.98v1.78h-20.41v-1.78
              c5.21-0.44,7.13-1.32,7.78-5.02c0.47-2.82,0.62-5.71,2.75-30.29c0.3-3.33-0.45-4.7-8.09-5.27v-1.78h15.37l18.98,33.95
              l20.24-33.95h15.32v1.78c-7.41,0.7-8.27,1.31-8.13,6.44l0.36,26.05c0.26,7.04,0.62,7.4,8.08,8.09v1.78H151.55z"/>
          </g>
        </g>
        <polygon className={styles.st1 + ' ' + navBarComponentDesktopAnimationStyles.st1} points="190,145 100,190 10,145 10,55 100,10 190,55 	" />
      </g>
    </svg>
  )
}

export default LogoSvgComponent
