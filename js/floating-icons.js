const icons = [
    'fa-scissors',
    'fa-thread',
    'fa-needle',
    'fa-tshirt',
    'fa-hat-cowboy'
];

function createFloatingIcon() {
    const floatingElements = document.querySelector('.floating-elements');
    if (!floatingElements) return;

    const icon = document.createElement('i');
    icon.className = `fas ${icons[Math.floor(Math.random() * icons.length)]} floating-item`;
    
    // Random position
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.left = `${Math.random() * 100}%`;
    
    // Random size
    const size = 1.5 + Math.random() * 1.5;
    icon.style.fontSize = `${size}rem`;

    // Random movement
    const translateX = (Math.random() - 0.5) * 200;
    const translateY = -100 - Math.random() * 50;
    icon.style.setProperty('--translate-x', `${translateX}px`);
    icon.style.setProperty('--translate-y', `${translateY}px`);

    // Random animation duration
    const duration = 6 + Math.random() * 6;
    icon.style.animationDuration = `${duration}s`;

    floatingElements.appendChild(icon);

    // Remove the icon after animation
    setTimeout(() => {
        icon.remove();
    }, duration * 1000);
}

let iconCount = 0;
const maxIcons = 100;
let interval = null;

function startFloatingIcons() {
    if (interval) return; // Evita múltiplos intervalos

    interval = setInterval(() => {
        createFloatingIcon();
        iconCount++;

        if (iconCount >= maxIcons) {
            clearInterval(interval);
            interval = null;
        }
    }, 300); // Agora os ícones aparecem a cada 300ms
}

function stopFloatingIcons() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

// Start/Stop control
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Pausar/Continuar Ícones';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px';
    button.style.background = '#333';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        if (interval) {
            stopFloatingIcons();
        } else {
            startFloatingIcons();
        }
    });

    document.body.appendChild(button);
    startFloatingIcons();
});
