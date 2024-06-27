const number = document.getElementById("number");
const fahrenheit = document.getElementById("toFahrenheit"); 
const celsius = document.getElementById("toCelsius"); 
const resultElement = document.getElementById("result"); 
let temp;

function convert(){
    if(fahrenheit.checked){
        temp = (number.value * 9/5) + 32+"℉";
        resultElement.textContent=temp
         


    }
    else if(celsius.checked){
        temp = (number.value - 32) * 5/9+ "℃";
        resultElement.textContent=temp
    }
    else{
        alert("Please select a unit");
    }

}