/* //@here
Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella / repo js - biglietto - treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) 
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Prima di scrivere il codice impostate il ragionamento nei commenti!

Bonus:
Applicare de controlli sull'input dell'utente */

//Comincio l esercizio fissando i 3 punti fondamentali:
//RACCOLTA DATI:
//Chiedere all utente il numero dei km che vuole percorrere
//Chiedere all utente la sua età

//ESECUZIONE LOGICA:
//calcolare il prezzo del biglietto in base ai km (0,21 euro al km)
//Poi applicare al biglietto il 20% di sconto per i minorenni
//Applicare al biglietto il 40% di sconto se over 65

//OUTPUT: stampa risultato in forma umana (compreso di decimali)

//Ora riportiamo tutto in js:

/* let message = "";
const userKmString = prompt("Scrivi i km che vuoi percorrere");
const userAgeString = prompt("Scrivi la tua età");
console.log(userKmString, userAgeString);

/* if (isNaN(userKm) || isNaN(userAge)) {
    console.log("Devi inserire SOLO valori numerici! Ricarica la pagina!")
} */

/* const userKm = parseInt(userKmString);
const userAge = parseInt(userAgeString);
console.log(userKm, userAge);

const priceKm = (userKm * 0,21);
console.log(priceKm);

if (userAge > 18 && userAge < 65) {
    console.log("Sei maggiorenne");
} else if (userAge < 18) {
    console.log("Sei minorenne");
} else if (userAge >= 65) {
    console.log("Sei over 65")
}

const minorAge = (userAge * 20) / 100;
console.log(minorAge);

const overAge = (userAge * 40) / 100;
console.log(overAge);

if (minorAge) {
    message = `Il prezzo del tuo biglietto è di ${minorAge} €`;
} else if (overAge) {
    message = `Il prezzo del tuo biglietto è di ${overAge} €`;
}
console.log(message); */

//CORREZIONE ESERCIZIO IN CLASSE:
//I 3 punti fondamentali:
//RACCOLTA DATI:
//chiedere all utente il numero di km
//chiedere eta all utente
//salvare in una variabile il prezzo base

//ESECUZIONE LOGICA:
//transformare i dati in numeri
//calcolare il prezzo base km * prezzo per km
//SE è minorenne: sconto 20%
//SE over65: sconto 40%
//ALTRIMENTI: sconto 0

//OUTPUT:
//Stampo il messaggio finale

//Traduciamo tutto in JS:
const userKmString = prompt("Scrivi qui quanti km vuoi percorrere", 10);
const userAgeString = prompt("Scrivi qui l'età del passeggero", 18);

const priceKm = 0.21;

const userKm = parseInt(userKmString);
const userAge = parseInt(userAgeString);

const ticketPrice = (userKm * priceKm);

let percDiscount = 0;
//Entriamo ora nei condizionali:

if (userAge < 18) {
    percDiscount = 20;
} else if (userAge >= 65) {
    percDiscount = 40;
}

const discount = (ticketPrice * percDiscount) / 100;
const finalPrice = (ticketPrice - discount);
console.log(finalPrice.toFixed(2));

if (isNaN(userKm) || isNaN(userAge)) {
    console.log("Devi inserire un valore numerico!");
}