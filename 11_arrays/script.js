/*Aufgabe 1:
	Erstelle ein Array mit folgenden Werten:
	4,1,2,3
	Füge die Werte 17 und 199 dazu
	
		a. Gib alle Werte in einer Schleife aus!
		b. Zähle alle Werte zusammen und gib das Ergebnis aus
        c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus*/
let arr = [4,1,2,3];

arr.push(17);
arr.push(199);

//Aufgabe 1a
for (let index = 0; index < arr.length; index++) {
	console.log(arr[index]);
}


//Aufgabe 1b
let sum = 0;
for (let index = 0; index < arr.length; index++) {
	sum += arr[index];	
}
console.log(sum);

//Aufgabe 1c
let avg = 0;
for (let index = 0; index < arr.length; index++) {
	avg += arr[index];
}
console.log("Mittelwert: " + avg / arr.length);


/*Aufgabe 2
Erstelle ein Array mit folgenden Strings:
"Susi", "Paula", "Hans"

Gib folgenden Satz aus:
"Meine Freunde sind Susi, Paula und Hans

Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
"Meine Freunde sind Susi, Paula, Hans und Sepp"*/

let array = ["Susi", "Paula", "Hans"];
array.push("Sepp");

console.log("Meine Freunde sind " + array[0] + ", " + array[1] + ", " + array[2] + " und " + array[3]);