let inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const meterEl = document.getElementById("meter")
const feetEl = document.getElementById("feet")
const literEl = document.getElementById("liter")
const gallonEl = document.getElementById("gallons")
const kiloEl = document.getElementById("kilo")
const poundEl = document.getElementById("pounds")

btnEl.addEventListener("click", function () {
    let feetToMeter = inputEl.value / 3.281
    let meterToFeet = inputEl.value * 3.281
    meterEl.textContent = `${inputEl.value} Meters = ${meterToFeet.toFixed(3)} Feet`
    feetEl.textContent = `${inputEl.value} Feet = ${feetToMeter.toFixed(3)}Meters`
})

btnEl.addEventListener("click", function () {
    let gallonToLiter = inputEl.value * 3.785
    let literToGallons = inputEl.value / 3.785
    literEl.textContent = `${inputEl.value} Liter = ${literToGallons.toFixed(3)} Gallons`
    gallonEl.textContent = `${inputEl.value} Gallons = ${gallonToLiter.toFixed(3)} Liters`
})

btnEl.addEventListener("click", function () {
    let poundToKilo = inputEl.value / 2.204
    let kiloToPound = inputEl.value * 2.204
    kiloEl.textContent = `${inputEl.value} Kilograms = ${kiloToPound.toFixed(3)} Pounds`
    poundEl.textContent = `${inputEl.value} Pounds = ${poundToKilo.toFixed(3)} Kilograms`
})