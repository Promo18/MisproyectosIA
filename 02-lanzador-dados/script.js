// Selección de los elementos de la interfaz
const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('roll-btn');

function rollDice() {
    // 1. Añadimos la clase CSS para iniciar la animación de giro
    diceElement.classList.add('rolling');
    
    // Deshabilitamos el botón para evitar múltiples clics durante el giro
    rollButton.disabled = true;

    // 2. Lógica matemática para generar un número entero del 1 al 6
    // Math.random() genera un decimal entre 0 y 0.999...
    // Al multiplicarlo por 6 da un rango de 0 a 5.999...
    // Math.floor() lo redondea hacia abajo (0 a 5), y sumamos 1 para que sea (1 a 6)
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // 3. Cambiamos el número justo a la mitad de la animación (250ms) para que coincida visualmente
    setTimeout(() => {
        diceElement.textContent = randomNumber;
    }, 250);

    // 4. Retiramos la clase de animación cuando termine (500ms) y reactivamos el botón
    setTimeout(() => {
        diceElement.classList.remove('rolling');
        rollButton.disabled = false;
    }, 500);
}

// Escuchador de eventos: Al hacer clic en el botón se ejecuta la función
rollButton.addEventListener('click', rollDice);