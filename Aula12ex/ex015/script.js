function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemo.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velho.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovema.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //idodo
                img.setAttribute('src', 'imagens/velha.png')
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)

}