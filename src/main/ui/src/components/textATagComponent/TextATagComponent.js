import style from './textATagComponent.module.css';

const TextATagComponent = ({ hrefOnClickFunction, href, text }) => {
  return (
    <a href={href} onClick={hrefOnClickFunction} className={style.a_tag}>{text}</a>
  )
}

export default TextATagComponent