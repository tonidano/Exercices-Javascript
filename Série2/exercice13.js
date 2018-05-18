function calculIMC() {

var poids = prompt("Votre taille en kilos");
var taille = prompt("Votre taille en mètres");
var imc = (poids)/(taille * taille);
var imc_fixed = imc.toFixed(2);

  switch (true) {

    case (imc_fixed < 16.5) :
      alert(imc_fixed + " dénutrition ou famine");
      break;

    case (imc_fixed < 18.5) :
      alert(imc_fixed + " maigreur");
      break;

    case (imc_fixed < 25) :
      alert(imc_fixed + " corpulence normale");
      break;

    case (imc_fixed < 30) :
      alert(imc_fixed + " surpoids");
      break;

    case (imc_fixed < 35) :
      alert(imc_fixed + " obésité modérée");
      break;

    case (imc_fixed <= 40) :
      alert(imc_fixed + " obésité sévère");
      break;

    case (imc_fixed > 40) :
      alert(imc_fixed + " obésité morbide");
      break;

    default :
      alert("Errreur")


}

}


// - moins de 16,5 : dénutrition ou famine
// - 16,5 <= IMC < 18,5 : maigreur
// - 18,5 <= IMC < 25 : corpulence normale
// - 25 <= IMC < 30 : surpoids
// - 30 <= IMC < 35 : obésité modérée
// - 35 <= IMC < 40 : obésité sévère
// - plus de 40 : obésité morbide
