/*add(a,b)
Aufgabe 1: subtract(a,b)
Aufgabe 2: mulitply(a,b)
Aufgabe 3: supercalculation(a,b) -> Formel: (a+b)/2 * a
Aufgabe 4: printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.*/

//Aufgabe 1:
function sub(a,b){
    return a - b;
}

let result = sub(8,2);
console.log(result);

//Aufgabe 2:
function mul(a,b){
    return a * b;
}

let result1 = mul(5,8);
console.log(result1);

//Aufagbe 3:
function supercalculation(a,b){
    return (a+b)/2*a;
}   

let result2 = supercalculation(2,10)
console.log(result2);

//Aufgabe 4
function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = ((7*A+1) / 19);
    let M = (11*A+4-B) % 29;
    let Q = Math.floor (N/4);
    let W = (N+Q+31-M) % 7;
    let P = Math.floor (25-M-W);

    if (P>0) {
        console.log('Ostersonntag ist der ', P ,'. April');
    }
    else {
        console.log('Ostersonntag ist der ' ,(P+31), '. März')
    }
}

printEasterDate(2023)