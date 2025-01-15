document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio page loaded');

    setTimeout(() => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.textContent = 'Welcome to my portfolio!';
        welcomeMessage.style.position = 'fixed';
        welcomeMessage.style.top = '50%';
        welcomeMessage.style.left = '50%';
        welcomeMessage.style.transform = 'translate(-50%, -50%)';
        welcomeMessage.style.padding = '1rem 2rem';
        welcomeMessage.style.backgroundColor = '#333';
        welcomeMessage.style.color = 'white';
        welcomeMessage.style.fontSize = '1.5rem';
        welcomeMessage.style.borderRadius = '10px';
        welcomeMessage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        document.body.appendChild(welcomeMessage);

        setTimeout(() => {
            welcomeMessage.style.transition = 'opacity 0.5s';
            welcomeMessage.style.opacity = '0';
            setTimeout(() => welcomeMessage.remove(), 500);
        }, 2000);
    }, 2000);
});
