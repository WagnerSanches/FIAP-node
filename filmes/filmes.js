class Filme {
    constructor(nome, diretor, lancamento) {
        this.nome = nome;
        this.diretor = diretor;
        this.lancamento = lancamento;
    }
}

const filmes = [
    new Filme('Poderoso Chefao', 'Golias internachional', 1972),
    new Filme('Vingadores: Ultimo da fila', 'hebert richard', 2019),
    new Filme('Intocaveis', 'Lava Movies', 2000)
]

module.exports.filmes = filmes;