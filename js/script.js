document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        console.log(`Icon clicked: ${event.target.id}`);
    });
});
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('spin');
        
        // Remove class after animation to allow repeated spins
        setTimeout(() => {
            icon.classList.remove('spin');
        }, 500);
    });
});