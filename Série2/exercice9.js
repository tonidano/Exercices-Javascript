function testWhile () {


  var p = prompt("Veuillez écrire une phrase contenant un -p-");

  while(!p.includes("p")){
  p= prompt("Veuillez écrire une phrase contenant un -p-");

  }

  alert("'" + p + "'");

}
