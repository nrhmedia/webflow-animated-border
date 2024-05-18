const cardLines = document.querySelectorAll('.border-gradient');
cardLines.forEach((cardLine) => {
  const { duration } = cardLine.dataset;
  cardLine.style.animation = `card_line-anim ${duration} linear infinite, card_line-opacity-loop 3s linear infinite`;
});
