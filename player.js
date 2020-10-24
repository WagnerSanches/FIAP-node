class Jogador {
    constructor(nome, idade, equipe) {
        this.nome = nome;
        this.idade = idade;
        this.equipe = equipe;
    }

    apresentarJogador() {
        return 'O jogador ' + this.nome + ' que joga no(a) ' + this.equipe + ' acaba de completar ' + this.idade + ' anos.';
    }
}

class EJogador extends Jogador{
    constructor(nome, idade, equipe, tipoJogo, nomeJogo) {
       super(nome, idade, equipe);
       this.tipoJogo = tipoJogo;
       this.nomeJogo = nomeJogo;
    }

    apresentarCarreira() {
        return 'O Jogador de ' + this.tipoJogo + ', ' + this.nome + ', vem fazendo sucesso no jogo ' + this.nomeJogo + '.'; 
    }
}

var jogador = new Jogador('Kami', '22', 'Pain');
console.log(jogador.apresentarJogador());

var eJogador = new EJogador('Kami', '22', 'Pain', 'moba', 'League of Legends');
console.log(eJogador.apresentarCarreira())