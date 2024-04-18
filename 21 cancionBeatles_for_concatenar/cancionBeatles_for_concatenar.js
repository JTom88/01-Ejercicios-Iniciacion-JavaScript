
function sing(){
    let letItBe = "let it be, ";
    let letItBeFinal = "let it be";
    let cancion = "";
    let frase1 = "there will be an answer, ";
    let frase2 = "whisper words of wisdom, "
    for (let i=1; i<=4; i++){
        cancion += letItBe;
    }
    cancion = cancion + frase1;

    for (let i=1; i<=5; i++){
        cancion += letItBe;
    }
    cancion += frase2;
    cancion += letItBeFinal;
    return cancion;
}

//Your code above ^^^

console.log(sing());