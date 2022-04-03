var jogador, vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')

mudarJogador('X')

//Essa função foi declarada dentro dos onclick's no arquivo de HTML
function escolherQuadrado(id) {
    
    var quadrado = document.getElementById(id)

    //Esse if verifica se o quadrado já foi selecionado anteriormente, impedindo que o jogador mude o valor já estabelecido.
    if (quadrado.innerHTML !== '-') {
        return;
    }

    //Se o vencedor já estiver definido, o jogador não poderá selecionar nenhum quadrado.
    if (vencedor !== null) {
        return;
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = '#000'

    //Esse if realiza a troca dos jogadores X e O.
    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }

    mudarJogador(jogador)
    checaVencedor()

}

//Essa função retornará dentro do escolherQuadrado()
function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador;
}

//Essa função retornará dentro do escolherQuadrado()
function checaVencedor() {

    //Todos os quadrados recebendo o número dos seus id's
    var quadrado1 = document.getElementById('1')
    var quadrado2 = document.getElementById('2')
    var quadrado3 = document.getElementById('3')
    var quadrado4 = document.getElementById('4')
    var quadrado5 = document.getElementById('5')
    var quadrado6 = document.getElementById('6')
    var quadrado7 = document.getElementById('7')
    var quadrado8 = document.getElementById('8')
    var quadrado9 = document.getElementById('9')

    //Todas as possíveis sequências para vencer o jogo.
    //Os if's recebem a condicional do checaSequencia(), já definido como true

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudaVencedor(quadrado1) //caso o quadrado1 tenha sido X, ele retornará dentro do label do vencedor-selecionado o valor X. 
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudaVencedor(quadrado4)
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudaVencedor(quadrado7)
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudaVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudaVencedor(quadrado2)
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudaVencedor(quadrado3)
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudaVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
        mudaVencedor(quadrado3)
        return;
    }

}

//Essa função está dentro do checaVencedor(), retornando o valor dentro do quadrado selecionado e colocando dentro do label, podendo ser X ou O
function mudaVencedor(quadrado) {

    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor

}

//Essa função retornará dentro das possíveis sequências de vencedores no checaVencedor()
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#10b810'
    quadrado1.style.color = 'white'
    quadrado2.style.background = '#10b810'
    quadrado2.style.color = 'white'
    quadrado3.style.background = '#10b810'
    quadrado3.style.color = 'white'
    
}

//Essa função retornará dentro do checaVencedor()
function checaSequencia(quadrado1, quadrado2, quadrado3) {

    var ehIgual = false

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        ehIgual = true //o resultado dessa função retornará no if do checaVencedor(), tornando a condicional verdadeira, prosseguindo o código 
    }

    return ehIgual;

}

//Essa função função foi declarada no onclick do button, no arquivo HTML
function reiniciar() {

    vencedor = null;
    vencedorSelecionado.innerHTML = ''

    for (i = 1 ; i <= 9 ; i++) {
        var quadrado = document.getElementById(i)

        quadrado.style.background = '#eee'
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-'
    }
    mudarJogador('X')
}