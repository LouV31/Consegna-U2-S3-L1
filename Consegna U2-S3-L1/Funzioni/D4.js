/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => {
    const areaRettangolo = l1 * l2;
    return console.log(areaRettangolo);
};
area(5, 2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = (x, y) => {
    let sum = x + y;
    if (x === y) {
        sum = sum * 3;
    }
    return console.log(sum);
};
crazySum(1, 2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = (x) => {
    let diffABS = x - 19;
    if (x > 19) {
        diffABS = diffABS * 3;
    }
    return console.log(Math.abs(diffABS));
};
crazyDiff(20, 19);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = (n) => {
    if ((n >= 20 && n <= 100) || n === 400) {
        return console.log(true);
    }
    return console.log(false);
};
boundary(20);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (string) => {
    if (string.startsWith("EPICODE")) {
        return console.log(string);
    }
    return console.log("EPICODE " + string);
};
epify("PROVA");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = (n) => {
    if (n % 3 === 0) {
        return console.log("E' multiplo di 3");
    } else if (n % 7 === 0) {
        return console.log("E' multiplo di 7");
    } else {
        return console.log("Non è ne multiplo di 3 ne di 7");
    }
};
check3and7(14);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = (string) => {
    let splittedString = string.split("");
    let arrayReverseFromSplittedString = splittedString.reverse();
    let joinArrayToString = arrayReverseFromSplittedString.join("");
    return console.log(joinArrayToString);
};
reverseString("prova");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = (string) => {
    let arrayString = string.split(" ");
    let words = [];
    for (let i = 0; i < arrayString.length; i++) {
        const word = arrayString[i];

        const firstCharCap = word.charAt(0).toUpperCase();

        const lastChars = word.substring(1);

        const wordsWithFisrtUpper = firstCharCap + lastChars;

        words.push(wordsWithFisrtUpper);
    }
    return console.log(words.join(" "));
};
upperFirst("epicode is real");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (string) => {
    return console.log(string.slice(1, -1));
};
cutString("prova");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = (n) => {
    const myArray = [];
    while (myArray.length < n) {
        let randomNum = Math.floor(Math.random() * 11);
        if (!myArray.includes(randomNum)) {
            myArray.push(randomNum);
        }
    }
    return console.log(myArray);
};
giveMeRandom(8);
