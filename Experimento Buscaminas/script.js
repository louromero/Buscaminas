//Funcion para buscar las bombas adyacentes de una casilla
function adyacentes(componente) {
    let cont = 0;

    //Bomba 1
    if (componente[0] == bomba1F - 1 && componente[2] == bomba1C - 1) {
        cont++;
    }
    if (componente[0] == bomba1F - 1 && componente[2] == bomba1C) {
        cont++;
    }
    if ((componente[0] == bomba1F - 1) && (componente[2] == bomba1C + 1)) {
        cont++;
    }
    if ((componente[0] == bomba1F) && (componente[2] == bomba1C - 1)) {
        cont++;
    }
    if ((componente[0] == bomba1F) && (componente[2] == bomba1C + 1)) {
        cont++;
    }
    if ((componente[0] == bomba1F + 1) && (componente[2] == bomba1C - 1)) {
        cont++;
    }
    if ((componente[0] == bomba1F + 1) && (componente[2] == bomba1C)) {
        cont++;
    }
    if ((componente[0] == bomba1F + 1) && (componente[2] == bomba1C + 1)) {
        cont++;
    }

    //Bomba 2
    if (componente[0] == bomba2F - 1 && componente[2] == bomba2C - 1) {
        cont++;
    }
    if (componente[0] == bomba2F - 1 && componente[2] == bomba2C) {
        cont++;
    }
    if (componente[0] == bomba2F - 1 && componente[2] == bomba2C + 1) {
        cont++;
    }
    if (componente[0] == bomba2F && componente[2] == bomba2C - 1) {
        cont++;
    }
    if (componente[0] == bomba2F && componente[2] == bomba2C + 1) {
        cont++;
    }
    if (componente[0] == bomba2F + 1 && componente[2] == bomba2C - 1) {
        cont++;
    }
    if (componente[0] == bomba2F + 1 && componente[2] == bomba2C) {
        cont++;
    }
    if (componente[0] == bomba2F + 1 && componente[2] == bomba2C + 1) {
        cont++;
    }

    //Bomba 3
    if (componente[0] == bomba3F - 1 && componente[2] == bomba3C - 1) {
        cont++;
    }
    if (componente[0] == bomba3F - 1 && componente[2] == bomba3C) {
        cont++;
    }
    if (componente[0] == bomba3F - 1 && componente[2] == bomba3C + 1) {
        cont++;
    }
    if (componente[0] == bomba3F && componente[2] == bomba3C - 1) {
        cont++;
    }
    if (componente[0] == bomba3F && componente[2] == bomba3C + 1) {
        cont++;
    }
    if (componente[0] == bomba3F + 1 && componente[2] == bomba3C - 1) {
        cont++;
    }
    if (componente[0] == bomba3F + 1 && componente[2] == bomba3C) {
        cont++;
    }
    if (componente[0] == bomba3F + 1 && componente[2] == bomba3C + 1) {
        cont++;
    }

    return cont;

}


//window.alert("BIENVENIDOS AL BUSCAMINAS!!! \nHAY 4 BOMBAS REPARTIDAS EN EL TABLERO\nTIENES 1 VIDAS\nMUCHA SUERTE!!!");
//Generar 4 bombar aleatoriamente
const bomba1F = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
const bomba1C = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
const bomba2F = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
const bomba2C = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
const bomba3F = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
const bomba3C = Math.floor((Math.random() * (5 - 1 + 1)) + 1);

//mostrar bombas
//window.alert("Bomba 1: " + bomba1F + "," + bomba1C);
//window.alert("Bomba 2: " + bomba2F + "," + bomba2C);
//window.alert("Bomba 3: " + bomba3F + "," + bomba3C);

color = 0;
//contador para saber cuando mostrar cartel de que se ganó
let contador = 1;
//puntos
let puntos = 0;
//Salir
let salir = 0;
function buscar(componente) {
    if (salir == 0) {
        //Condicion para que no se vuelva a contar los puntos
        if (document.getElementById(componente).style.backgroundColor != "green" && document.getElementById(componente).style.backgroundColor != "red") {
            if ((componente[0] == bomba1F && componente[2] == bomba1C) || (componente[0] == bomba2F && componente[2] == bomba2C) || (componente[0] == bomba3F && componente[2] == bomba3C)) {
                //Cambiar imagen con id=bomba
                document.getElementById("bomba").src = "img/boom.png";
                document.getElementById(componente).style.backgroundColor = "red";
                document.getElementById(componente).innerHTML = '💣';

                //Mostrar texto de que perdio
                document.getElementById("perdiste").innerHTML = "PERDISTE!!!";
                salir = 1;
            } else {
                document.getElementById(componente).style.backgroundColor = "green";
                contador++;
                //Mostrar numeración de las casillas
                cont = adyacentes(componente);
                if (cont == 0) {
                    document.getElementById(componente).innerHTML = "";
                    document.getElementById("puntos").innerHTML = "PUNTOS:" + (puntos += 20);

                    //mostrar todos los campos en 0 que esten al rededor
                    cero(componente, num);
                } else if (cont == 1) {
                    document.getElementById(componente).innerHTML = '𝟭';
                    document.getElementById("puntos").innerHTML = "PUNTOS:" + (puntos += 10);
                } else if (cont == 2) {
                    document.getElementById(componente).innerHTML = '𝟮';
                    document.getElementById("puntos").innerHTML = "PUNTOS:" + (puntos += 10);
                } else if (cont == 3) {
                    document.getElementById(componente).innerHTML = '𝟯';
                    document.getElementById("puntos").innerHTML = "PUNTOS:" + (puntos += 10);
                } else if (cont == 4) {
                    document.getElementById(componente).innerHTML = '𝟰';
                    document.getElementById("puntos").innerHTML = "PUNTOS:" + (puntos += 10);
                }
            }


        }
        if (contador == 23) {
            document.getElementById("perdiste").innerHTML = "GANASTE!!!";
            document.getElementById("perdiste").style.color = "green";
            document.getElementById("bomba").src = "img/ganador.png";
            salir = 1;
        }

    }
}

function cambiarColor() {
    //Cambiar de color la página
    if (color == 0) {
        document.body.style.backgroundColor = "black";
        document.getElementById("puntos").style.color = "white";
        document.getElementById("juego").style.backgroundColor = "gray";
        color++;
    } else if (color == 1) {
        document.body.style.backgroundColor = "peachpuff";
        document.getElementById("puntos").style.color = "black";
        document.getElementById("juego").style.backgroundColor = "";
        color++;
    } else if (color == 2) {
        document.body.style.backgroundColor = "lightcoral";
        document.getElementById("puntos").style.color = "black";
        document.getElementById("juego").style.backgroundColor = "";
        color++;
    } else if (color == 3) {
        document.body.style.backgroundColor = "bisque";
        document.getElementById("puntos").style.color = "black";
        document.getElementById("juego").style.backgroundColor = "";
        color++;
    } else if (color == 4) {
        document.body.style.backgroundColor = "mediumaquamarine";
        document.getElementById("puntos").style.color = "black";
        document.getElementById("juego").style.backgroundColor = "";
        color++;
    } else if (color == 5) {
        document.body.style.backgroundColor = "pink";
        document.getElementById("puntos").style.color = "black";
        document.getElementById("juego").style.backgroundColor = "";
        color++;
    } else {
        document.body.style.backgroundColor = "";
        document.getElementById("puntos").style.color = "";
        document.getElementById("juego").style.backgroundColor = "";
        color = 0;
    }
}