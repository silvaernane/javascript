let n1 = 1545.2
console.log(n1)
console.log(n1.toFixed(2)) // COntrolar as casas decimais
console.log(n1.toFixed(2).replace('.', ',')) // Controlar casas decimais e trocar ponto por vírgula

// Formatar como valor monetário
console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))