class Heroi {
    constructor(nome, identidade, poderDeluta, poder) {
        this.nome = nome;
        this.identidade = identidade;
        this.poderDeluta = poderDeluta;
        this.poder = poder;
    }

    aprensentarHeroi() {
        return 'O Heroi se chama ' + this.nome + ' ele possui o super poder de ' + this.poder;
    }
}

// var heroi = new Heroi('Super Man', 'Robison Cleiton', 8000, 'Caça passarinho');

function heroi2(nome, identidade, poder) {
    this.nome = nome;
    this.identidade = identidade;
    this.poder = poder;
}

heroi2.prototype.aprensentarHeroi = function() {
    return 'O poder dele e ' + this.poder + ' seu nome verdadeiro é ' + this.identidade + ' mas prefere ser chamado de ' + this.nome;
}

var heroi2Var = new heroi2('Rei dos piratas', 'Luffy', 'Gomo Gomo no Mi');

console.log(heroi2Var.aprensentarHeroi());