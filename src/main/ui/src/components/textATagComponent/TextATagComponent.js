import style from './textATagComponent.module.css';

const TextATagComponent = props => {
  return (
    <a className={style.a_tag}>{props.text}</a>
  )
}

export default TextATagComponent