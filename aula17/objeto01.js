let amigo = {nome: 'josé',
    sexo: 'M',
    peso: 85.4,
    engordar(p){ // Podemos ter funções dentro de objetos
        console.log('Engordou');
        this.peso += p;
    }
};
amigo.engordar(10);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);