import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};

let bankomatrunning = true;
let balance = "";

while (bankomatrunning) {
  console.log("Wählen sie den gewünschten Befehl aus: ")
const selection = [1 + ". Einzahlen", 2 + ". Abheben", 3 + ". Kontostand anzeigen", 4 + ". Bankomat beenden"];
  
  for (let i = 0; i < selection.length; i++) {
    console.log(selection[i]);  
  }

let input = await readLineAsync();

if (input == 1) {
  console.log("Geben sie den Betrag ein, welchen sie einzahlen möchten: ")
  let inputeinzahlung = await readLineAsync();
  balance += parseFloat(inputeinzahlung);
  console.log("Sie haben " + inputeinzahlung + " Euro eingezahlt."); 
}

if (input == 2) {
  console.log("Geben sie den Betrag ein, welchen sie abheben möchten: ")
  let inputabheben = await readLineAsync();
  balance -= parseFloat(inputabheben);
  console.log("Sie haben " + inputabheben + " Euro abgehoben."); 
}

if (input == 3) {
  console.log("Sie haben " + balance + " Euro auf Ihrem Konto.");
}

if (input == 4) {
  bankomatrunning = false;
  readline.close();
  console.log("Sie haben den Bankomat beendet.")
}

}

