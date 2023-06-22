var dias = parseInt(30)
var hrs = parseInt(24)
var min = parseInt(60)
var seg = parseInt(60)
const hora = document.querySelector(".time")
const horas = document.querySelector(".timer")
let timer = setInterval(function (montante){
    montante = dias + hrs + min + seg
    if(--montante < 0){
        clearInterval(timer)
        horas.innerHTML = `Launched`
    }else{
        seg--
        if(seg < 0){
            min--
            seg = 60
            
        }
        if(min < 0){
            hrs--
            min = 60
        }
        if(hrs < 0){
            dias--
            hrs = 24
        }
        hora.innerHTML = `${dias} : ${hrs} : ${min} : ${seg}`
    }
}, 1000)