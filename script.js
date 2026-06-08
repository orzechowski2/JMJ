// Animação dos números das estatísticas
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateNumber = () => {
                    current += step;
                    if (current < target) {
                        element.textContent = Math.floor(current);
                        requestAnimationFrame(updateNumber);
                    } else {
                        element.textContent = target;
                    }
                };
                
                updateNumber();
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(number => observer.observe(number));
}

// Smooth scroll para links de navegação
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll effect
function headerScrollEffect() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        if (currentScroll > 50) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#2c3e50';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Formulário de denúncia
function initDenunciaForm() {
    const form = document.getElementById('denunciaForm');
    const messageDiv = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const cidade = document.getElementById('cidade').value;
            const descricao = document.getElementById('descricao').value;
            
            if (!nome || !email || !cidade || !descricao) {
                showMessage('Por favor, preencha todos os campos!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um email válido!', 'error');
                return;
            }
            
            const submitButton = form.querySelector('.btn-submit');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            try {
                await simulateApiCall({ nome, email, cidade, descricao });
                showMessage('Denúncia enviada com sucesso! Em breve entraremos em contato.', 'success');
                form.reset();
            } catch (error) {
                showMessage('Erro ao enviar denúncia. Tente novamente mais tarde.', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Denúncia';
            }
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
    }, 5000);
}

function simulateApiCall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Denúncia recebida:', data);
            resolve();
        }, 1500);
    });
}

// Animação de scroll reveal
function scrollReveal() {
    const reveals = document.querySelectorAll('.impacto-card, .solucao-item, .stat-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    reveals.forEach(reveal => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(30px)';
        reveal.style.transition = 'all 0.6s ease';
        observer.observe(reveal);
    });
}

// Newsletter subscription (adicional)
function initNewsletter() {
    // Esta função pode ser expandida para incluir uma newsletter real
    console.log('Newsletter functionality ready');
}

// Contador de visualizações da página
function trackPageView() {
    let pageViews = localStorage.getItem('pageViews') || 0;
    pageViews++;
    localStorage.setItem('pageViews', pageViews);
    console.log(`Esta página foi visualizada ${pageViews} vezes`);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    smoothScroll();
    headerScrollEffect();
    initDenunciaForm();
    scrollReveal();
    initNewsletter();
    trackPageView();
    
    // Adicionar classe active no header baseado na seção atual
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Adicionar CSS para o estado active dos links
const style = document.createElement('style');
style.textContent = `
    nav ul li a.active {
        color: #e74c3c !important;
    }
    
    .impacto-card, .solucao-item, .stat-card {
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style);