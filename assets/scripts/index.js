document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function(){
        var numeroAleatorioUno = Math.floor((Math.random() * 6) + 1);
        var numeroAleatorioDos = Math.floor((Math.random() * 6) + 1);

        document.getElementById("player-1-img").setAttribute("src", "./assets/images/dice" + numeroAleatorioUno + ".jpg");
        document.getElementById("player-2-img").setAttribute("src", "./assets/images/dice" + numeroAleatorioDos + ".jpg");

        if(numeroAleatorioUno == numeroAleatorioDos){
            document.querySelector("h1").innerHTML = "Draw!";
        }
        else if(numeroAleatorioUno > numeroAleatorioDos){
            document.querySelector("h1").innerHTML =  "🚩 Player 1 Wins!";
        }
        else if(numeroAleatorioUno < numeroAleatorioDos){
            document.querySelector("h1").innerHTML =  "Player 2 Wins! 🚩";
        }
    });
});


