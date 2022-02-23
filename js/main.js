var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form-control");
var elSelect = document.querySelector(".form-select");
var elResult = document.querySelector(".result")

var elUzs = document.querySelector(".uzs");
var elRubl = document.querySelector(".rubl");
var elEuro = document.querySelector(".euro")
console.log(elForm)
elForm.addEventListener("submit", function(event){
event.preventDefault();
var elInputVal = Number(elInput.value)
var elSelectVal = Number(elSelect.value)
var allResult = Number(elInputVal * elSelectVal);
elResult.textContent = (`${allResult} `)
})
