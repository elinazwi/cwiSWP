 // Erstelle eine Variable banana mit dem Wert "Banane"
let banane = "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple"


// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;


// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleWeightPerApple = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeightPerBanana = 0.22;


// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

let pricePerApple = applePricePerKilo / appleWeightPerApple;
let pricePerBanana = bananaPricePerKilo / bananaWeightPerBanana;

console.log("Anzahl Bananen pro Kilo: " + 1 / bananaWeightPerBanana);
console.log("Anzahl Äpfel pro Kilo: " + 1 / appleWeightPerApple);

console.log("Preis pro Banane: " + pricePerBanana);
console.log("Preis pro Apfel: " + pricePerApple);

// Preis von 8 Äpfeln
console.log("Preis von 8 Äpfeln: " + pricePerApple * 8);

// Preis von 17 Bananen
console.log("Preis von 17 Bananen: " + pricePerBanana * 17);

// Preis von 1 Tonne Äpfel
let applePricePerTon = 1000 / appleWeightPerApple;
console.log("Preis von einer Tonne Äpfel: " + applePricePerTon);

// Preis von 1 Tonne Bananen
let bananaPricePerTon = 1000 / bananaWeightPerBanana;
console.log("Preis von einer Tonne Bananen: " + bananaPricePerTon);