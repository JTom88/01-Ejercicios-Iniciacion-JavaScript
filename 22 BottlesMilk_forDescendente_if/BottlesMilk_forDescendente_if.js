// Your code here:
let frase1 = " bottles of milk on the wall, ";
let frase2 = " bottles of milk.";
let frase3 = " Take one down pass it around, ";
let frase4 = " bottles of milk on the wall."
let frase1Final = " Take one down pass it around, no more bottles of milk on the wall.";
let frase2Final = " No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
let agrupado = "";

for (let i=99; i>=0; i--) {
    if (i != 0){
    agrupado += i + frase1 + i + frase2;
    
    }
    if (i==1){
        agrupado += frase3 + (i-1) + frase4;
        agrupado += i+frase1 + i+ frase2 + frase1Final + frase2Final;
        break;
        
    }
    
}
console.log(agrupado);