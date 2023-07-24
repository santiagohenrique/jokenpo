const caixaEscolhaJogador = document.querySelector('div#player-pick');
const caixaEscolhaMaquina = document.querySelector('div#computer-pick');
const botaoReset = document.querySelector('button#btn-reset');
const resultadoJogo = document.querySelector('p.resultado-jogo');
const placarJogo = document.querySelector('p.placar-jogo');

let placarJogador = JSON.parse(localStorage.getItem('score')) || {
        vitorias: 0,
        derrotas: 0,
        empates: 0
    }

function iniciarJogo(movimentoJogador){

    exibirEscolhaJogador(movimentoJogador)
    const movimentoComputador = gerarMovimentoComputador();
    exibirEscolhaMaquina(movimentoComputador);

    const resultadoFinal = gerarResultadoFinal(movimentoJogador, exibirEscolhaMaquina(movimentoComputador))
    if(resultadoFinal === 'VITÓRIA'){
        placarJogador.vitorias += 1
    }else if (resultadoFinal === 'DERROTA'){
        placarJogador.derrotas += 1
    }else{
        placarJogador.empates += 1
    }

    resultadoJogo.innerHTML = `${resultadoFinal}`

    atualizarPlacar()

    localStorage.setItem('score', JSON.stringify(placarJogador))

}

function atualizarPlacar(){
    placarJogo.innerHTML = `V: ${placarJogador.vitorias}. D: ${placarJogador.derrotas}. E: ${placarJogador.empates}`
}

function exibirEscolhaJogador(escolhaJogador){
    if(escolhaJogador === 'pedra'){
        caixaEscolhaJogador.innerHTML = '&#9994;'
    }else if(escolhaJogador=== 'papel'){
        caixaEscolhaJogador.innerHTML = '&#9995;'
    }else if(escolhaJogador === 'tesoura'){
        caixaEscolhaJogador.innerHTML = '&#9996;'
    }
}

function gerarMovimentoComputador(){
    const numeroAleatorio = Math.random();
    return numeroAleatorio;
}

function exibirEscolhaMaquina(escolhaMaquina){
    if(escolhaMaquina < 0.33){
        escolhaMaquina = 'pedra'
        caixaEscolhaMaquina.innerHTML = '&#9994;'
    }else if(escolhaMaquina  < 0.66){
        escolhaMaquina = 'papel'
        caixaEscolhaMaquina.innerHTML = '&#9995;'
    }else{
        caixaEscolhaMaquina.innerHTML = '&#9996;'
        escolhaMaquina = 'tesoura'
    }
    return escolhaMaquina
}

function gerarResultadoFinal(escolhaJogador, escolhaMaquina){
    if(escolhaJogador === 'pedra' && escolhaMaquina === 'pedra'){
        return 'EMPATE'
    }else if(escolhaJogador === 'pedra' && escolhaMaquina === 'tesoura'){
        return 'VITÓRIA'
    }else if(escolhaJogador === 'pedra' && escolhaMaquina === 'papel'){
        return 'DERROTA'
    }else if(escolhaJogador === 'papel' && escolhaMaquina === 'papel'){
        return 'EMPATE'
    }else if(escolhaJogador === 'papel' && escolhaMaquina === 'pedra'){
        return 'VITÓRIA'
    }else if(escolhaJogador === 'papel' && escolhaMaquina === 'tesoura'){
        return 'DERROTA'
    }else if(escolhaJogador === 'tesoura' && escolhaMaquina === 'tesoura'){
        return 'EMPATE'
    }else if(escolhaJogador === 'tesoura' && escolhaMaquina === 'papel'){
        return 'VITÓRIA'
    }else if(escolhaJogador === 'tesoura' && escolhaMaquina === 'pedra'){
        return 'DERROTA'
    }
}

function resetarPlacar(){
    placarJogador.vitorias = 0;
    placarJogador.derrotas = 0;
    placarJogador.empates = 0;
    atualizarPlacar()
}
