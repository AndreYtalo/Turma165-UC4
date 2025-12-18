function calcularIdade() {
    const dataNascimento = document.getElementById("dataNascimento").value;
    const resultado = document.getElementById("resultado");
  
    if (!dataNascimento) {
      resultado.textContent = "Selecione uma data válida.";
      return;
    }
  
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    resultado.textContent = `Você tem ${idade} anos.`;
  }
  