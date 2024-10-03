document.addEventListener('DOMContentLoaded', (event) => {
    function calcularMulta() {
        const velocidadeMaxima = parseFloat(document.getElementById('velocidadeMaxima').value);
        const velocidadeVeiculo = parseFloat(document.getElementById('velocidadeVeiculo').value);
        const resultadoDiv = document.getElementById('resultado');
        const excesso = ((velocidadeVeiculo - velocidadeMaxima) / velocidadeMaxima) * 100;
    
        let inputCapacidade = document.getElementById("capacidade");
        let inputVelocidade = document.getElementById("velocidade");
        let divSaida = document.getElementById("saida")
        let botaoCalcular = document.getElementById("calcular");
    
        botaoCalcular.onclick = calcularMulta;
    
        function calcularMulta() {
            let porcent = parseFloat((velocidade*1)/capacidade);
            let sobra = Math.floor(porcent-1);
    
            if (sobra <= 0.2){
                divSaida.innerText = `valor da multa {130,16}`;
            }else{
                if (sobra > 0.2 | sobra <= 0.5){
                    divSaida.innerText = `valor da multa {195,23}`;
                }else{
                    divSaida.innerText = `valor da multa {800,23}`;
    
        if (excesso <= 0) {
            resultadoDiv.innerHTML = "Você está dentro do limite de velocidade.";
            resultadoDiv.className = 'result';
        } else {
            if (excesso > 0 && excesso <= 20) {
                resultadoDiv.innerHTML = `Você excedeu até 20% a velocidade máxima. Sua multa é de R$ 130,16.`;
                resultadoDiv.className = 'result alert';
            } else {
                if (excesso > 20 && excesso <= 50) {
                    resultadoDiv.innerHTML = `Você excedeu entre 20% e 50% a velocidade máxima. Sua multa é de R$ 195,23.`;
                    resultadoDiv.className = 'result alert';
                } else {
                    resultadoDiv.innerHTML = `Você excedeu mais de 50% a velocidade máxima. Sua multa é de R$ 880,41.`;
                    resultadoDiv.className = 'result alert';
                }
            }
     });
        