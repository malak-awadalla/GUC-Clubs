document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.getElementById('cursor-glow');

    // Move the glow to the current cursor position
    cursorGlow.style.transform = `translate(-50%, -50%) translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});