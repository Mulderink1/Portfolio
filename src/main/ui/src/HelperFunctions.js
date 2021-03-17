export const buildSectionFadeIn = style => {
  const bodyBlocksArray = document.getElementsByClassName(style.section_blocks)[0].children;
  const windowHeight = window.innerHeight;
  let targetNumber = (0 - windowHeight) + (windowHeight / 8);
  let arrayIndex = 0;
  let error = false;

  try {
    bodyBlocksArray[arrayIndex].classList.add(style.show_body_block_section);
    arrayIndex += 1;
  } catch (e) {
    console.error(e);
    error = true;
  }

  window.addEventListener('scroll', () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > targetNumber + windowHeight && error === false) {
      targetNumber = currentScrollPosition;
      try {
        bodyBlocksArray[arrayIndex].classList.add(style.show_body_block_section);
        arrayIndex += 1;
      } catch (e) {
        console.error(e)
        error = true;
      }
    };
  });
};