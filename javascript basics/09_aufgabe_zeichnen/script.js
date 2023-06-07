/*Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
X X X X 
O O O O 
X X X X 
O O O O 


2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
XX X XX X 
X    X X   X 
X            X
X            X*/

//Aufgabe 1:

let output = "";
for (let row = 0; row < 4; row++) {
    if (row % 2 == 0) {
        console.log("xxxx");
    }
    if (row % 2 == 1) {
        console.log("oooo");
    }
}

//Aufgabe 2:
let summe = 0;
let output1 = "";
for (let index = 0; index <= 100; index++) {
    if (index % 2 == 0) {
        summe += index;
    }
}
console.log("Die Summe von allen geraden Zahlen: " + summe)


//Aufagbe 3:
for(let name=1; name <=20; name++) {
    if (name%20==0) {
        console.log("xxxxxx");
        console.log("x");
        console.log("x");
        console.log("xxxxxx");
        console.log("x");
        console.log("x");
        console.log("xxxxxx");
}

}

