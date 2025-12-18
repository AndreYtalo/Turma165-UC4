function mostrarTabuada() {
    const numero = document.getElementById('numero').value;
    const tabuadaDiv = document.getElementById('tabuada');
    
    let html = '';
    for (let i = 1; i <= 10; i++) {
        html += `<div class="linha">
                    ${i} × ${numero} = <strong>${i * numero}</strong>
                 </div>`;
    }
    
    tabuadaDiv.innerHTML = html;
}

// Mostra tabuada do 1 ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    mostrarTabuada();
});
