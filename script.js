// Toggle Menu Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
} // <--- Essa chave estava faltando!

// Função para enviar e-mail via formulário
function enviarMensagem(e) {
    e.preventDefault();
    
    // Captura os dados do formulário
    const nome = e.target.querySelector('input[type="text"]').value;
    const emailUsuario = e.target.querySelector('input[type="email"]').value;
    const msg = e.target.querySelector('textarea').value;
    
    // Configurações do seu e-mail
    const meuEmail = "contato@roboandre.com.br";
    const assunto = encodeURIComponent(`Novo Contato Site: ${nome}`);
    const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail do remetente: ${emailUsuario}\n\nMensagem:\n${msg}`);

    // Abre o aplicativo de e-mail padrão
    window.location.href = `mailto:${meuEmail}?subject=${assunto}&body=${corpo}`;
}

// Animação de Contagem (Stats)
const counters = document.querySelectorAll('.stat-number');
const runCounters = () => {
    counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        const update = () => {
            const cur = +c.innerText.replace(/\D/g,'');
            const step = target / 100;
            if(cur < target) {
                c.innerText = Math.ceil(cur + step).toLocaleString();
                setTimeout(update, 20);
            } else {
                c.innerText = target.toLocaleString();
            }
        };
        update();
    });
};

// Ativa a contagem quando chegar na seção com scroll
const obs = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        runCounters();
        obs.unobserve(entries[0].target); // Faz a animação rodar apenas uma vez
    }
}, { threshold: 0.5 });

if(document.querySelector('.grid-stats')) {
    obs.observe(document.querySelector('.grid-stats'));
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