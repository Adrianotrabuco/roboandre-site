// Menu mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Função para enviar e-mail via formulário
function enviarMensagem(e) {
    e.preventDefault();
    
    // Captura os dados do formulário
    const nome = e.target.querySelector('input[type="text"]').value;
    const emailUsuario = e.target.querySelector('input[type="email"]').value;
    const msg = e.target.querySelector('textarea').value;
    
    // Configurações do e-mail de contato
    const meuEmail = "contato@roboandre.com.br";
    const assunto = encodeURIComponent(`Novo Contato Site: ${nome}`);
    const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail do remetente: ${emailUsuario}\n\nMensagem:\n${msg}`);

    // Abre o aplicativo de e-mail padrão
    window.location.href = `mailto:${meuEmail}?subject=${assunto}&body=${corpo}`;
}

// Animação de contagem dos resultados
const counters = document.querySelectorAll('.stat-number');
const runCounters = () => {
    counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        const update = () => {
            const cur = +c.innerText.replace(/\D/g,'');
            const step = target / 100;
            if(cur < target) {
                c.innerText = Math.ceil(cur + step).toLocaleString('pt-BR');
                setTimeout(update, 20);
            } else {
                c.innerText = target.toLocaleString('pt-BR');
            }
        };
        update();
    });
};

// Ativa a contagem quando chegar na seção com scroll
const statsSection = document.querySelector('.grid-stats');
if (statsSection && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            runCounters();
            obs.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    obs.observe(statsSection);
} else if (statsSection) {
    runCounters();
}

// Navbar efeito de scroll (Opcional para dar um charme)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.background = 'rgba(6, 9, 24, 0.98)';
    } else {
        navbar.style.background = 'rgba(6, 9, 24, 0.95)';
    }
});
