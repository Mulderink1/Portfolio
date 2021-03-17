import style from './bodySectionBlockComponent.module.css';

const BodySectionBlockComponent = ({ id ,AboutMeComponent }) => {

  return (
    <section id={id} className={`${style.block_section} hide_body_block_section`}>
      {AboutMeComponent}
    </section>
  )
}

export default BodySectionBlockComponent