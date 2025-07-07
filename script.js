// Vervang dit:
setInterval(() => {
  for (let i = 0; i < 3; i++) createFloatingWindow();
}, 6000);

// Door dit:
setInterval(() => {
  createFloatingWindow();
}, 3000);
