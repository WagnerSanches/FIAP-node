const idades = [21, 14, 17, 24, 74]

const idadesFiltradas = idades.filter(idade => { 
    if(idade - 10 > 10) 
        return idade
    else 
        return 0
    }
);

console.log(idadesFiltradas)