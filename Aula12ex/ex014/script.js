function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var min = new Date().getMinutes()
    if (hora == 1) {
        msg.innerText = `Agora é ${hora} hora e ${min} minutos.`
    } else {
        msg.innerText = `Agora são ${hora} horas e ${min} minutos.`
    }
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#C47B17'
        msg.innerHTML += '<br>Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FD8734'
        msg.innerHTML += '<br>Boa Tarde!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#052A56'
        msg.innerHTML += '<br>Boa Noite!'
    }
}