const imageContainer = document.querySelector('.image-container');
const hologram = document.querySelector('.hologram');

imageContainer.addEventListener('mousemove', (event) => {
  const xPos = event.pageX - imageContainer.offsetLeft;
  const yPos = event.pageY - imageContainer.offsetTop;
  hologram.style.transform = `translate(${xPos}px, ${yPos}px)`;
});
