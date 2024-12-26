// Selezione degli elementi nel DOM
const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

// Inizializzazione del valore del counter
let count = 0;

// Funzione per aggiornare il valore mostrato
function updateCounter() {
    counterValue.textContent = count;
}

// Event Listener per Incremento
incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Event Listener per Decremento
decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});