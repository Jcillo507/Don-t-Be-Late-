document.body.addEventListener('keydown', (evt) => {
  const { keyCode } = evt;
  if ([37, 38, 39, 40].includes(keyCode)) {
    evt.preventDefault();
  }
});
