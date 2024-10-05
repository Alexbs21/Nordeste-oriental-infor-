document.addEventListener('DOMContentLoaded', function() {
    const estatisticas = document.querySelector('#estatisticas ul');
    const novasEstatisticas = [
        'Exportações: R$ 60 bilhões (2022)',
        'Investimento em Infraestrutura: R$ 15 bilhões (2023)'
    ];

    novasEstatisticas.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = stat;
        estatisticas.appendChild(li);
    });
});
