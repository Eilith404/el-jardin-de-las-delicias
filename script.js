function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('modo-oscuro');

  if (isDark) {
    body.style.backgroundColor = '#1b1b1b';
    body.style.color = '#f5f5f5';
  } else {
    body.style.backgroundColor = 'hsl(30, 40%, 90%)';
    body.style.color = '#2e1a15';
  }
}

function toggleReflexion() {
  const box = document.getElementById('reflexion-final');
  box.style.display = (box.style.display === 'none') ? 'block' : 'none';
}

// Sonido al pasar el ratón por imágenes
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    const sound = document.getElementById("hoverSound");
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  });
});
