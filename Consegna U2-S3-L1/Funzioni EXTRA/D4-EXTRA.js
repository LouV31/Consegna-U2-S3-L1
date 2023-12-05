// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myArray = [];

const giveMeRandom = (n) => {
    while (myArray.length < n) {
        let randomNum = Math.floor(Math.random() * 11);
        if (!myArray.includes(randomNum)) {
            myArray.push(randomNum);
        }
    }
    return console.log(myArray);
};
giveMeRandom(5);

const checkArray = (array) => {
    const arrayNumOverFive = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i] + " E' maggiore di 5.");
            arrayNumOverFive.push(array[i]);
        } else {
            console.log(array[i] + " E' minore di 5.");
        }
    }
    return console.log(
        "La somma dei numeri superiori a 5 è " + arrayNumOverFive.reduce((acc, currentValue) => acc + currentValue)
    );
};
checkArray(myArray);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
        name: "primo",
        price: 200,
        id: "id1",
        quantity: 10,
    },
    {
        name: "secondo",
        price: 50,
        id: "id2",
        quantity: 14,
    },
    {
        name: "terzo",
        price: 120,
        id: "id3",
        quantity: 5,
    },
    {
        name: "quarto",
        price: 30,
        id: "id4",
        quantity: 3,
    },
];
console.log(shoppingCart);
const shoppingCartTotal = () => {
    const arrayPrice = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        const priceForProduct = product.price * product.quantity;
        arrayPrice.push(priceForProduct);
    }
    return console.log("Il totale dovuto è " + arrayPrice.reduce((acc, currentValue) => acc + currentValue) + "€");
};
shoppingCartTotal();

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newProduct = {
    name: "quinto",
    price: 80,
    id: "id4",
    quantity: 4,
};

const addToShoppingCart = (newObj) => {
    shoppingCart.push(newObj);
    return console.log(shoppingCart.length);
};

addToShoppingCart(newProduct);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = (array) => {
    let arrayPrices = [];
    for (let i = 0; i < array.length; i++) {
        arrayPrices.push(array[i].price);
    }
    //return console.log(arrayPrices);
    let mostExpansiveProduct = Math.max(...arrayPrices);
    return console.log(mostExpansiveProduct);
};
maxShoppingCart(shoppingCart);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = (array) => {
    return console.log(array[array.length - 1]);
};
latestShoppingCart(shoppingCart);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = (x) => {
    let count = 0;
    while (count <= 3) {
        let randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        if (randomNum > x) {
            count++;
        } else {
            count = 0;
        }
    }
    return;
};
console.log(loopUntil(5));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNumArray = [2, 3, "babbà", 6, "zeppolelle", 10];

const average = (array) => {
    const onlyNums = array.filter((el) => typeof el === "number");
    console.log(onlyNums);
    let sum = onlyNums.reduce((acc, currentValue) => acc + currentValue, 0);
    let average;
    if (onlyNums.length > 0) {
        average = sum / onlyNums.length;
    } else {
        average = 0;
    }
    return console.log(average);
};
average(myNumArray);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myStringArray = ["precipitevolissimevolmente", "Molto brevee", "penso vada bene così"];
const longest = (array) => {
    let longestString = array[0];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.length > longestString.length) longestString = element;
    }
    return console.log(longestString);
};
longest(myStringArray);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const antiSpam = (emailContent) => {
    let spamwords = ["SPAM", "SCAM"];
    let emailContentToUpperCase = emailContent.toUpperCase();

    for (let i = 0; i < spamwords.length; i++) {
        let spamword = spamwords[i];

        if (emailContentToUpperCase.includes(spamword)) {
            return false;
        }
    }
    return true;
};
console.log(antiSpam("non"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const passedDays = (date) => {
    let today = Date.now();
    let passedDay = new Date(date);
    let daysGone = (today - passedDay) / (1000 * 60 * 60 * 24);
    return parseInt(daysGone);
};
console.log(passedDays("2023-12-2"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = (x, y) => {
    const matrix = [];

    for (i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
            row.push(i.toString() + j.toString());
        }
        matrix.push(row);
    }
    return matrix;
};
console.log(matrixGenerator(3, 2));
