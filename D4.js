/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* RISPOSTA 1

function area (l1,l2) {
    let rectangleArea = ([10*12])

    console.log ('The total area of the rectangle is:', rectangleArea)
}

area ()

*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* RISPOSTA 2 - ANCORA DA AGGIUSTARE

function crazySum(x, y) {

    let totCrazySum = 2 + 5;
  
    if (totCrazySum %1 === 0) {
      totCrazySum = x + y;
      console.log('x and y are whole, so x+y:', totCrazySum)
    } else {
      totCrazySum %1 !== 0;
      totCrazySum = [x+y]*3;
      console.log ('x or y are not whole numbers, so their sum multiplied by three is:',totCrazySum) 
    }
  
    return totCrazySum
  
  }
  
  crazySum();

*/
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* RISPOSTA 3

let n = [0];

function crazyDiff() {
  let totcrazyDiff = 19;
  if (totcrazyDiff - n === 19) {
    crazyDiff = totcrazyDiff * 3;
    console.log(
      "La differenza è 19, quindi il parametro moltiplicato per 3 =",
      crazyDiff
    );
  }
}

crazyDiff();

*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* RISPOSTA 4 

function bundary(n) {
  let number = 400;

  if ((number % 1 === 0) && (number > 20 && number <= 100) || (number === 400)) {
    number = true;
    console.log("n is whole and between 20 and 100 or equal to 400", number);
  } else {
    number !== Math.isWhole;
    console.log(
      "n is not whole or n is not > 20 and/or <=100, or = to 400",
      number
    );
  }
}

bundary();

*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* RISPOSTA 6

function check3and7(n) {
  let number = -14;

  if (number < 0) {
    console.log("n is not a positive number");
  } else if (number % 7 === 0 || number % 3 === 0) {
    console.log("n is divisible by 7 or 3:", number);
  } else console.log("n is NOT multiple of 7 or 3:", number);
}

check3and7()

*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
