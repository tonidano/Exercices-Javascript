function calculMoyenne () {


  var n;
  var total = 0;
  var nb_entrees = 0;
  var moyenne = 0;

do {
  n = "";
  while(!Number.isInteger(n)){

    n = Number(prompt("Veuillez entrer des nombres entiers!"));
   if(!Number.isInteger(n)){
      alert("Erreur");
      }
}
    if(n >= 0) {
      total+=Number(n);
      nb_entrees++;

    }else{
      var moyenne = (total/nb_entrees);
  }

}while(n>=0)

alert("Le nombre d'entrées est de " + nb_entrees);
alert("La moyenne est de " + moyenne);

}
