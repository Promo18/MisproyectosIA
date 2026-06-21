// Array con los 4 tipos de clima requeridos
const weatherData = [
    {
        name: "Soleado",
        emoji: "☀️",
        temp: "28°C",
        bg: "linear-gradient(135deg, #fcebc4 0%, #f9ad67 100%)"
    },
    {
        name: "Lluvioso",
        emoji: "🌧️",
        temp: "14°C",
        bg: "linear-gradient(135deg, #616161 0%, #9bc5c3 100%)"
    },
    {
        name: "Nevado",
        emoji: "❄️",
        temp: "-2°C",
        bg: "linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)"
    },
    {
        name: "Tormentoso",
        emoji: "⛈️",
        temp: "19°C",
        bg: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)"
    }
];

// Índice para controlar el estado actual del clima
let currentIndex = 0;

// Selección de elementos del DOM
const emojiElement = document.getElementById("weather-emoji");
const nameElement = document.getElementById("weather-name");
const tempElement = document.getElementById("weather-temp");
const changeButton = document.getElementById("change-btn");

// Función para actualizar la interfaz gráfica
function changeWeather() {
    // Incrementa el índice y vuelve a 0 si llega al final de la lista
    currentIndex = (currentIndex + 1) % weatherData.length;
    
    const currentContainer = weatherData[currentIndex];

    // Modifica los textos y emojis en pantalla
    emojiElement.textContent = currentContainer.emoji;
    nameElement.textContent = currentContainer.name;
    tempElement.textContent = currentContainer.temp;
    
    // Modifica el fondo dinámico del body
    document.body.style.background = currentContainer.bg;
}

// Escuchador de eventos para el botón
changeButton.addEventListener("click", changeWeather);