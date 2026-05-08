const formulario = document.getElementById('form');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const PnomeD = document.getElementById('pnome').value;
    const UnomeD = document.getElementById('unome').value;
    
    const novo = {
        pnome: pnomeD,
        unome: unomeD
    };
});
    