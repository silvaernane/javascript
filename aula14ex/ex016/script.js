function contar() {
    let ini = document.getElementById('ini');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res');
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.textContent = "Impossível contar!"
    } else {
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        res.textContent = '';
        if (p <= 0) {
            res.textContent = '';
            alert('Intervalo inválido, considerando 1')
            p = 1;
        }
        res.innerHTML += 'Contando:';
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.textContent += ` ${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.textContent += ` ${c} \u{1F449}`;
            }
        }
    }
    res.textContent += ` \u{1F6A9}`;
}

function recarregar() {
    location.reload();
}