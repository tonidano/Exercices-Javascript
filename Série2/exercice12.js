function conversionTemperature() {

var menu = prompt("Choississez votre conversion :\n0.Fin du programme\n1.De Celsius vers Fahrenheit\n2.De Celsius vers Kelvin\n3.De Fahrenheit vers Celsius\n4.De Fahrenheit vers Kelvin\n5.De Kelvin vers Celsius\n6.De Kelvin vers Fahrenheit");
var temperature = prompt("Température");
var f;
var c;
var k;

switch (menu) {

  case "0" :
    alert("Fin du programme");
    break;

  case "1":
    f= (Number(temperature)* 9/5) + 32;
    alert(f.toFixed(2) + "°F");
    break;

  case "2":
    k= Number(temperature) + 273.15;
    alert(k + "°K");
    break;

  case "3":
    c= ((Number(temperature)- 32)) / (9/5);
    alert(c.toFixed(2) + "°C");
    break;

  case "4":
    k= (((Number(temperature)- 32))*(5/9)) + 273.15;
    alert(k.toFixed(2) + "°K");
    break;

  case "5":
    c= (Number(temperature) - 273.15);
    alert(c + "°C");
    break;

  case "6":
    f= (Number(temperature)* 9/5) - 459.67;
    alert(f.toFixed(2) + "°F");
    break;
}

}


// [°F] = ([°C] x 9/5) + 32
// [K] = [°C] + 273,15
// [°C] = ([°F] - 32) / (9/5)
// [K] = (([°F] - 32) x (5/9)) + 273,15
// [°C] = [K] - 273,15
// [°F] = ([K] x 9/5) - 459,67
