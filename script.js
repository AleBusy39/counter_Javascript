// Creazione dinamica degli elementi del DOM
const app = document.getElementById('counter-app');

const counterDisplay = document.createElement('p');
counterDisplay.id = "counter-value";
counterDisplay.textContent = "0";

const decrementButton = document.createElement('button');
decrementButton.id = "decrement-btn";
decrementButton.textContent = "-";

const incrementButton = document.createElement('button');
incrementButton.id = "increment-btn";
incrementButton.textContent = "+";

// Appendi gli elementi al DOM
app.appendChild(counterDisplay);
app.appendChild(decrementButton);
app.appendChild(incrementButton);

// Inizializzazione del valore del contatore
let count = 0;

// Funzione per aggiornare il valore mostrato
function updateCounter() {
    counterDisplay.textContent = count;
}

// Aggiungi Event Listeners
incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
});
