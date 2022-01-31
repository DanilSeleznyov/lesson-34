let firstnumber = document.getElementById('first_number')
let secondnumber = document.getElementById('second_number')

let btnPlus = document.querySelector('#btn_plus')
let btnMinus = document.querySelector('#btn_minus')
let btnMultiply = document.querySelector('#btn_multiply')
let btnDivedet = document.querySelector('#btn_divedet')
let btnSquare = document.querySelector('#btn_square')
let btnSquare1 = document.querySelector('#btn_square1')
let btnSqrt = document.querySelector('#btn_sqrt')
let btnSqrt1 = document.querySelector('#btn_sqrt1')
result = document.querySelector('.result')

btnPlus.onclick = function () {
    let sum = firstnumber.value*1 + secondnumber.value*1
    result.textContent = sum
}
btnMinus.onclick = function () {
    let sum = firstnumber.value*1 - secondnumber.value*1
    result.textContent = sum
}
btnMultiply.onclick = function () {
    let sum = firstnumber.value*1 * secondnumber.value*1
    result.textContent = sum
}
btnDivedet.onclick = function () {
    let sum = firstnumber.value*1 / secondnumber.value*1
    result.textContent = sum
}
btnSquare.onclick = function () {
    let sum = (firstnumber.value*1)*(firstnumber.value*1)
    result.textContent = sum
}
btnSquare1.onclick = function () {
    let sum = (secondnumber.value*1)*(secondnumber.value*1)
    result.textContent = sum
}
btnSqrt.onclick = function () {
    let sum = Math.sqrt(firstnumber.value*1)
    result.textContent = sum
}
btnSqrt1.onclick = function () {
    let sum = Math.sqrt(secondnumber.value*1)
    result.textContent = sum
}