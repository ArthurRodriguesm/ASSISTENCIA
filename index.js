const box = []
const Larg = document.querySelector('#largura')
const Altu = document.querySelector('#altura')
const ps = document.querySelector('#instrucao')


function criar(){
    /* Emite alertas caso as informações não seja preenchidas corretamente */
    if( Larg.value.length == 0 && Altu.value.length == 0 ){

        alert("Digite a Altura e Largura!")

    }else if( Larg.value.length == 0 || Larg.value <= 0 ){

        alert("Digite a Largura acima de zero!")

    }else if( Altu.value.length == 0 || Altu.value <= 0 ){

        alert("Digite a Altura acima de zero!")

    }else if(Larg.value > 10 || Altu.value > 10){

        alert("Permitidos de 0 até 10 apenas!")

    }else if( Larg.value <= 0  || Altu.value <= 0 ){

        alert("Digite a Altura e Largura acima de zero!")
        
    }else{

        start()
        ps.innerHTML = ''
    }
}

start = function(){
    
    createDataStructure()
    render()
}

/* Cria a estrutura */
createDataStructure = function(){
    const Largura =  Number(Larg.value)
    const Altura = Number(Altu.value)

    const numberofPixels = Largura * Altura

    for(let i = 0; i < numberofPixels; i++){
        box[i] = 0
    }
}

render = function(){
    const Largura =  Number(Larg.value)
    const Altura = Number(Altu.value)

        let html = '<table cellpadding=0 cellspacing=0>'

    for(let row = 0; row < Altura; row++){
        html += '<tr>'

            for(let column = 0; column < Largura; column++){
                const pixelIndex = column + (Largura * row)
                         
                html += '<td class="td" onclick="adicionarNumero()">'  

                html += `<div class="pixel-index">${pixelIndex}</div>`

                html += '</td>'
            }
            
        html += '</tr>'
        
    }
    
    html += '</table>'
    
    document.querySelector('#canvas').innerHTML = html

}

const res = document.querySelector("#resultado")

let c = 1

adicionarNumero = function(){
    
    res.innerHTML = c
    c++
}

diminuir = function(){
    c--
    res.innerHTML = c

    if(c <= 0){

        c = 0

    }
}
zerar = function(){

    c = 0
    res.innerHTML = 0
    
}