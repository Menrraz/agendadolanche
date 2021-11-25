const sun = document.getElementById('sunday') // Folga do domingo / 1 = atual / 2 = Proximo / 3 = O outro
const snack = document.getElementById('snack') // 1 = Hamburguer  / 2 = Cachorro-Quente 
const res = document.getElementById('res')
const res2 = document.getElementById('res2')
const res3 = document.getElementById('res3')
const res4 = document.getElementById('res4')
// Calculo dos Dias
const day = new Date().getDate().toString() // Por que "toString()"? Não sei! 
let weekDay = new Date().getDay().toString()
var dayF = day.length == 1 ? '0' + day : day // Acrescenta o zero nos dias antes de 10... teoricamente.
const sun1 = document.getElementById('sun1')
const sun2 = document.getElementById('sun2')
const sun3 = document.getElementById('sun3')
if (weekDay != 6) {
    for (let i = 0; 6 - weekDay >= i; i++) {
        dayF++
    }
} else {
    dayF++ // Se já for sabado: soma mais um e encontra o domingo.

}
// Calculo dos Meses e Dias
// 31 dias: 0, 2, 4, 6, 7, 9, 11
// 30 dias: 3, 5, 8, 10
// 29/28 dias: 1
// anos bissexto = 2020, 2024, 2028
let year = new Date().getFullYear().toString()
let month = new Date().getMonth().toString()
function sunday() {
    if (month == 1) { // Fevereiro (pra que esse mês existe msm?)
        if (dayF > 28) { // dayF já é o próximo domingo aqui (será útil posteriormente)
            sun1.innerHTML += ` (${(dayF - 28).toString().length == 1 ? '0' + (dayF - 28) : (dayF - 28)})` // 1º domingo depois do dia 28. Além de acrescentar um 0 em um número menor que 10.            
        } else {
            sun1.innerHTML += ` (${(dayF).toString().length == 1 ? '0' + (dayF) : (dayF)})`
        }
        if (dayF + 7 > 28) {
            sun2.innerHTML += ` (${(dayF + 7 - 28).toString().length == 1 ? '0' + (dayF + 7 - 28) : (dayF + 7 - 28)})` // 2º dom. depois do dia 28
        } else {
            sun2.innerHTML += ` (${(dayF + 7).toString().length == 1 ? '0' + (dayF + 7) : (dayF + 7)})`
        }
        if (dayF + 14 > 28) {
            sun3.innerHTML += ` (${(dayF + 14 - 28).toString().length == 1 ? '0' + (dayF + 14 - 28) : (dayF + 14 - 28)})` // 3º dom. depois do dia 28
        } else {
            sun3.innerHTML += ` (${(dayF + 14).toString().length == 1 ? '0' + (dayF + 14) : (dayF + 14)})`
        }
    }
    // Meses com 31 dias 
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        if (dayF > 31) {
            sun1.innerHTML += ` (${(dayF - 31).toString().length == 1 ? '0' + (dayF - 31) : (dayF - 31)})` // 1º domingo depois do dia 31
        } else {
            sun1.innerHTML += ` (${(dayF).toString().length == 1 ? '0' + (dayF) : (dayF)})`
        }
        if (dayF + 7 > 31) {
            sun2.innerHTML += ` (${(dayF + 7 - 31).toString().length == 1 ? '0' + (dayF + 7 - 31) : (dayF + 7 - 31)})` // 2º dom. depois do dia 31
        } else {
            sun2.innerHTML += ` (${(dayF + 7).toString().length == 1 ? '0' + (dayF + 7) : (dayF + 7)})`
        }
        if (dayF + 14 > 30) {
            sun3.innerHTML += ` (${(dayF + 14 - 30).toString().length == 1 ? '0' + (dayF + 14 - 31) : (dayF + 14 - 31)})` // 3º dom. depois do dia 30
        } else {
            sun3.innerHTML += ` (${(dayF + 14).toString().length == 1 ? '0' + (dayF + 14) : (dayF + 14)})`
        }
    }
    // Meses com 30 dias
    if (month == 3 || month == 5 || month == 7 || month == 10) {
        if (dayF > 30) {
            sun1.innerHTML += ` (${(dayF - 30).toString().length == 1 ? '0' + (dayF - 30) : (dayF - 30)})` // 1º domingo depois do dia 30
        } else {
            sun1.innerHTML += ` (${(dayF).toString().length == 1 ? '0' + (dayF) : (dayF)})`
        }
        if (dayF + 7 > 30) {
            sun2.innerHTML += ` (${(dayF + 7 - 30).toString().length == 1 ? '0' + (dayF + 7 - 30) : (dayF + 7 - 30)})` // 2º dom. depois do dia 30
        } else {
            sun2.innerHTML += ` (${(dayF + 7).toString().length == 1 ? '0' + (dayF + 7) : (dayF + 7)})`
        }
        if (dayF + 14 > 30) {
            sun3.innerHTML += ` (${(dayF + 14 - 30).toString().length == 1 ? '0' + (dayF + 14 - 30) : (dayF + 14 - 30)})`
        } else {
            sun3.innerHTML += ` (${(dayF + 14).toString().length == 1 ? '0' + (dayF + 14) : (dayF + 14)})`

        }
    }
    return "bissexto" // Útil para verificar se o ano é bissexto apenas chamando a função.
}
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0 && month == 0) {
    // Se for bissexto (Multiplo de 4 e de 400 mas não de 100)  
        if (dayF > 29) {
            sun1.innerHTML += ` (${(dayF - 29).toString().length == 1 ? '0' + (dayF - 29) : (dayF - 29)})`
        } else {
            sun1.innerHTML += ` (${(dayF).toString().length == 1 ? '0' + (dayF) : (dayF)})`
        }
        if (dayF + 7 > 29) {
            sun2.innerHTML += ` (${(dayF + 7 - 29).toString().length == 1 ? '0' + (dayF + 7 - 29) : (dayF + 7 - 29)})`
        } else {
            sun2.innerHTML += ` (${(dayF + 7).toString().length == 1 ? '0' + (dayF + 7) : (dayF + 7)})`
        }
        if (dayF + 14 > 29) {
            sun3.innerHTML += ` (${(dayF + 14 - 29).toString().length == 1 ? '0' + (dayF + 14 - 29) : (dayF + 14 - 29)})`
        } else {
            sun3.innerHTML += ` (${(dayF + 14).toString().length == 1 ? '0' + (dayF + 14) : (dayF + 14)})`
        }
} else {
    sunday() // Se não for bisexto chamará a função
}
// Dia da Semana: [INUTIL]
const semana = new Date().getDay().toString() // DE NOVO! ;-;
const semanaArr = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const diaSemana = semana[semanaArr]
// Verificação de quantos dias tem o mês (útil posteriormente)
function dayMonth() {
    function leapYear() {
        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return 31
        }
        if (month == 3 || month == 5 || month == 7 || month == 10) {
            return 30
        }
        if (month == 1) {
            return 28
        }
    }
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0 && month == 1) {
        return 29
    } else { // Se não for
        return leapYear()
    }
}
const warning = document.getElementById('warning')
if (weekDay == 0) { // Se o dia atual for domindo haverá um aviso na tela
    warning.innerHTML = `O de hoje (${day}) não conta, coloque o próximo (${dayF > dayMonth() ? dayF - dayMonth(): dayF}).`
}
// Calculo de Folgas
let freeDay = 0 // Devo chamá-lo fora da função para usar ele na função style() e ele também não pode ser const.
function dayOff() {
    if (sun.value == 1) {
        freeDay = 1
    }
    if (sun.value == 2) {
        freeDay = 2
    }
    if (sun.value == 3) {
        freeDay = 3
    }
}
const hamburguer = document.getElementById('hamburguer') // 1
const cachorro = document.getElementById('cachorro') // 2
const img = document.createElement('img')
const img2 = document.createElement('img2')
const img3 = document.createElement('img3')
const img4 = document.createElement('img4')
const imgs = [img, img2, img3, img4]
const ress = [res, res2, res3, res4]
for (let i = 0; i < 4; i++) {
    ress[i].appendChild(imgs[i])
}
const text = document.getElementById('text')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const text4 = document.getElementById('text4')
const texts = [text, text2, text3, text4]
function style(i) { // Estilos das fotos
    if (snack.value == 1) {
        imgs[i].style.background = 'url(hamburguer.jpg) round'
    } else {
        imgs[i].style.background = 'url(hotdog.jpg) round'
    }
    imgs[i].style.width = '95%'
    imgs[i].style.height = '80px'
    imgs[i].style.display = 'block'
    imgs[i].style.margin = '0 auto 10px auto'
    imgs[i].style.boxShadow = '2px 3px 7px 0px grey'
    imgs[i].style.filter = 'brightness(0.45)'
    var s = 0
    var folga = 1
    for (let i = 0; i < 4; i++) {
        if (freeDay == folga) {
            texts[i].innerHTML = '[FOLGA]'
            console.log(`freeDay = folga`)
            imgs[i].style.filter = 'brightness(0.3) grayscale(1)'
        } else {
            texts[i].innerHTML = `Dia ${dayF+s > dayMonth() ? dayF+s-dayMonth(): dayF+s} (daqui há ${dayF+s - day} dias)` // utilidade do dayF já ser o próximo domingo
            console.log(`freeday =/ folga`)
        }
        if (folga >= 3) {
            folga = 1
            console.log(`Folga maior que 3`)
        } else {
            folga++
            console.log(folga)
        }
        s+=7 // Somando +7 para o próximo domingo
    }
}
function calcular() {
    if (sun.value.length == 0 || snack.value.length == 0) {
        let empty = document.getElementById('empty')
        empty.style.display = 'block'
        empty.innerHTML = "Por favor, selecione todos os dados."
    } else {
        empty.style.display = 'none'
        for (let i = 0; i < 4; i++) {
            if (snack.value == 1) {
                style(i) // Infelizmente o style() é lido 4 vezes desnecessariamente, porém é preciso o valor do i
                snack.value = 2 // Intercalando os snacks
            } else {
                if (snack.value == 2) {
                    style(i)
                    snack.value = 1
                }
            }
        }
    }
}
snack.value = 0 // Para o Select snack permanecer na primeira opção escolhida pelo usuário
