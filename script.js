function calcular(){
    var ini = document.querySelector('#ini')
    var fim = document.querySelector('#fim')
    var pas = document.querySelector('#pas')

    var ini = Number(ini.value)
    var fim = Number(fim.value)
    var pas = Number(pas.value)

    var res = document.querySelector('#res')

    if( ini == 0 ){
        ini = 1

        res.innerHTML = `<strong>Resultado</strong>: <br>(`
        console.log(`Resultado: ${ini} ${fim} ${pas} `)

        var x = 1
        for(x == ini; x <= fim; x = x + pas){
            res.innerHTML += `${x}, `
        }
        res.innerHTML += `)`
        res.innerHTML += `<br>\u{1F601}`

    }
    else if( fim == 0 ){
        window.alert(`[ERRO] "Fim" não preenchido ou igual a 0!`)
    }
    else if( pas == 0 ){
        window.alert('[ERRO] "Razão" não preenchido ou igual a 0!')
    }

    else{
        res.innerHTML = `<strong>Resultado</strong>: <br>(`
        console.log(`Resultado: ${ini} ${fim} ${pas} `)

        var x = 1
        for(x == ini; x <= fim; x = x + pas){
            res.innerHTML += `${x}, `
        }
        res.innerHTML += `)`
        res.innerHTML += `<br>\u{1F601}`



    }


}