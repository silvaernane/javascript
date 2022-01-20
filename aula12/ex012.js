var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${min} minutos e ${sec} segundos!`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}