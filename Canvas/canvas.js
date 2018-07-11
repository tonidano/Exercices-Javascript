window.onload = function()

{
  var canvas = document.getElementById('mon_canvas');
  if (!canvas) {
    alert("Impossible de récupérer le canvas");
    return;
  }
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("Impossible de récupérer le context du canvas");
    return;
  }

  //Bandiera italiana (lignes)

  // ctx.beginPath();
  // ctx.fillStyle = "green";
  // ctx.moveTo(50, 50);
  // ctx.lineTo(150, 50);
  // ctx.lineTo(150, 200);
  // ctx.lineTo(50, 200);
  // ctx.lineTo(50, 50);
  // ctx.fill();
  // ctx.closePath();
  // ctx.beginPath();
  // ctx.fillStyle = "white";
  // ctx.moveTo(150, 50);
  // ctx.lineTo(250, 50);
  // ctx.lineTo(250, 200);
  // ctx.lineTo(150, 200);
  // ctx.lineTo(150, 50);
  // ctx.fill();
  // ctx.closePath();
  // ctx.beginPath();
  // ctx.fillStyle = "red";
  // ctx.moveTo(250, 50);
  // ctx.lineTo(350, 50);
  // ctx.lineTo(350, 200);
  // ctx.lineTo(250, 200);
  // ctx.lineTo(250, 50);
  // ctx.fill();
  // ctx.closePath();

  //Drapeau italien (rectangle)

  // ctx.beginPath();
  // ctx.fillStyle = "green";
  // ctx.fillRect(150, 50, 50, 150);
  // ctx.fillStyle = "white";
  // ctx.fillRect(200, 50, 50, 150);
  // ctx.fillStyle = "red";
  // ctx.fillRect(250, 50, 50, 150);
  // ctx.closePath();

  //Bateau

  // ctx.beginPath();
  // ctx.fillStyle = "black";
  // ctx.moveTo(100, 125);
  // ctx.lineTo(150, 125);
  // ctx.lineTo(100, 50);
  // ctx.lineTo(100, 150);
  // ctx.lineTo(150, 150);
  // ctx.lineTo(125, 175);
  // ctx.lineTo(75, 175);
  // ctx.lineTo(50, 150);
  // ctx.lineTo(100, 150);
  // ctx.stroke();
  // ctx.closePath();

  // ctx.beginPath();
  // ctx.fillStyle = "yellow";
  // ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.closePath();
  //
  //
  // ctx.beginPath();
  // ctx.fillStyle = "black";
  // ctx.bezierCurveTo(50, 75, 100, 150, 50, 75)
  // ctx.stroke();
  // ctx.closePath();

  //maison

  // ctx.beginPath();
  // ctx.strokeStyle = "black";
  // ctx.moveTo(50, 200);
  // ctx.lineTo(250, 200);
  // ctx.lineTo(150, 100);
  // ctx.lineTo(50, 200);
  // ctx.lineTo(50, 350);
  // ctx.lineTo(250, 350);
  // ctx.moveTo(250, 200);
  // ctx.lineTo(350, 150);
  // ctx.lineTo(250, 50);
  // ctx.lineTo(150, 100);
  // ctx.moveTo(250, 200);
  // ctx.lineTo(350, 150);
  // ctx.lineTo(350, 300);
  // ctx.lineTo(250, 350);
  // ctx.lineTo(250, 200);
  // ctx.stroke();
  // ctx.closePath();
  //
  // ctx.beginPath();
  // ctx.moveTo(83, 300);
  // ctx.lineTo(116, 300);
  // ctx.lineTo(116, 350);
  // ctx.lineTo(83, 350);
  // ctx.lineTo(83, 300);
  //
  // ctx.moveTo(150, 300);
  // ctx.lineTo(200, 300);
  // ctx.lineTo(200, 350);
  // ctx.lineTo(150, 350);
  // ctx.lineTo(150, 300);
  //
  // ctx.moveTo(155, 225);
  // ctx.lineTo(195, 225);
  // ctx.lineTo(195, 275);
  // ctx.lineTo(155, 275);
  // ctx.lineTo(155, 225);
  //
  // ctx.moveTo(80, 225);
  // ctx.lineTo(120, 225);
  // ctx.lineTo(120, 275);
  // ctx.lineTo(80, 275);
  // ctx.lineTo(80, 225);
  //
  // ctx.stroke();
  // ctx.closePath();

  //bonhomme

  // ctx.beginPath();
  // ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  // ctx.stroke();
  // ctx.closePath();
  // ctx.beginPath();
  // ctx.strokeStyle = "black";
  // ctx.moveTo(300, 150);
  // ctx.lineTo(300, 350);
  // ctx.moveTo(300, 200);
  // ctx.lineTo(350, 250);
  // ctx.moveTo(300, 200);
  // ctx.lineTo(250, 250);
  // ctx.moveTo(300, 350);
  // ctx.lineTo(350, 400);
  // ctx.moveTo(300, 350);
  // ctx.lineTo(250, 400);
  // ctx.stroke();
  // ctx.closePath();


  //Android

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.arc(155, 160, 20, 0, Math.PI, true);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(155, 250, 20, 0, Math.PI, false);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(135, 160);
  ctx.lineTo(135, 250);
  ctx.lineTo(175, 250);
  ctx.lineTo(175, 160);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(345, 160, 20, 0, Math.PI, true);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(345, 250, 20, 0, Math.PI, false);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(325, 160);
  ctx.lineTo(325, 250);
  ctx.lineTo(365, 250);
  ctx.lineTo(365, 160);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillRect(180, 150, 140, 140);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(205, 290, 25, 0.5 * Math.PI, 1.5 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(295, 290, 25, 0.5 * Math.PI, 1.5 * Math.PI, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillRect(205, 290, 90, 25);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillRect(200, 315, 40, 50);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillRect(260, 315, 40, 50);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(220, 365, 20, 0, Math.PI, false);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(280, 365, 20, 0, Math.PI, false);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(250, 145, 70, 0, Math.PI, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(208, 117, 5, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(292, 117, 5, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(250, 140);
  ctx.lineTo(210, 55);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineJoin = "bevel";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(250, 140);
  ctx.lineTo(290, 55);
  ctx.stroke();
  ctx.closePath();


}