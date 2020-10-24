// console.log('Carregando...')
// setTimeout( () => {
//     console.log('Carregado!')
// }, 5000)


const func = (nome) => {
    if(nome == "" || nome == null) {
        console.log('Você não tem um nome! Quem é você ?')
    } else {
        console.log('Bem vindo, ' + nome)
    }
    () => {
        console.log('FUNCIONA!');
    }
}


console.log(func('wagner'));