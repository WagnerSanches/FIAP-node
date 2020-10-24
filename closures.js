function closures() {
    const ext = 'Valor ext';

    function fInt() {
        const intr = 'Valor intr';
        console.log(ext + ' e ' + intr)
    }

    return fInt();
}

// closures()

function exeAfter(func) {
    const a = 1;
    const b = 1;
    const r = a + b;

    func(r);
}

exeAfter(function(resultado) {
    console.log('Apos a função o resultado gerado foi: ' + resultado)
})
