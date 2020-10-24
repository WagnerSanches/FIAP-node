function valorFuturo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Resolve daqui a pouco')
            reject('Erro na hora de esperar')
        }, 5000)
    })
}

valorFuturo()
    .then((valor) => {
        console.log(valor);
    })
    .then(() => {
        console.log('segundo')
    })
    .then(() => {
        console.log('terceiro')
    })
    .catch((valor) => {
        console.log(valor)
    })