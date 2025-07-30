// Rolagem suave para links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById("alerta").addEventListener("click", () => {
  alert("Não compartilhe conteúdos ofensivos. Você pode estar contribuindo para o cyberbullying.");
});
