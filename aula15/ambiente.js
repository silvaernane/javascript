let num = [5, 8, 4]; // Define um vetor
console.log(`Nosso vetor é o ${num}`);

num[3] = 6; // Define o valor de uma posição no vetor
console.log(`Nosso vetor é o ${num}`);

num.push(7);
num.push(1); // Adiciona um valor no final do vetor
console.log(num);

console.log(`Nosso vetor tem ${num.length} posições`); // Mostra o tamanho do vetor

console.log(num.sort()); //Coloca em ordem crescente

console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`);