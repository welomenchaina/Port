document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.portfolio-card');
    
    function floatAnimation() {
        const time = Date.now() * 0.001;
        const y = Math.sin(time * 0.5) * 3;
        card.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
    
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            const randomHue = Math.floor(Math.random() * 360);
            this.style.borderColor = `hsla(${randomHue}, 80%, 50%, 0.3)`;
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
    
    bgElements();
});

function bgElements() {
    const background = document.querySelector('.background');
    const colors = ['rgba(106, 17, 203, 0.1)', 'rgba(37, 117, 252, 0.1)', 'rgba(255, 255, 255, 0.05)'];
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('bg-element');
        
        const size = Math.random() * 200 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const blur = Math.random() * 20 + 5;
        const opacity = Math.random() * 0.2 + 0.05;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.background = color;
        element.style.filter = `blur(${blur}px)`;
        element.style.opacity = opacity;
        element.style.borderRadius = '50%';
        element.style.position = 'absolute';
        element.style.transform = 'translate(-50%, -50%)';
        
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        background.appendChild(element);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
        }
        50% {
            transform: translate(-50%, -50%) translateY(-20px) rotate(180deg);
        }
        100% {
            transform: translate(-50%, -50%) translateY(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);