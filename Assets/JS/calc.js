// aguarda carregar o dom
document.addEventListener("DOMContentLoaded", function() {
    // obtém referências para os elementos do form e botões
    const form = document.getElementById("calcForm");
    const calcularBtn = document.getElementById("calcularBtn");
    const limparBtn = document.getElementById("limparBtn");

    //adiciona um ouvinte de evento para o button calcular
    calcularBtn.addEventListener("click", function(event) {
        event.preventDefault(); // previne o comportamento padrão do botão
        calcular(); // chama a função calcular
    });

    // adiciona um ouvinte de evento para o button limpar
    limparBtn.addEventListener("click", function(event) {
        event.preventDefault(); // previne o comportamento padrão do botão
        limpar(); // chama a função limpar
    });
});

// função para calcular o resultado da operação
function calcular() {
    // obtém os valores dos formulários
    const numero1 = parseFloat(document.getElementById("inum1").value);
    const operacao = document.getElementById("iselecao").value;
    const numero2 = parseFloat(document.getElementById("inum2").value);
    const exibirResultado = document.getElementById("exibir");

    // verifica se os valores são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite números válidos");
        return;
    }
    // realiza a operação cde acordo com o operador selecionado
    let resultado;
    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                alert('Divisão por zero não permitida!');
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operador inválido!");
            return;
    }

    // exibe o resultado na tela
    exibirResultado.textContent = `Resultado: ${resultado}`;
}

// função para limpar os campos e focar o cursor no primeiro input
function limpar() {
        document.getElementById("inum1").value = "";
        document.getElementById("iselecao").selectedIndex = 0;
        document.getElementById("inum2").value = "";
        document.getElementById("exibir").innerHTML = "";
        document.getElementById("inum1").focus();
}





