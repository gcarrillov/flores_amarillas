// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Deja de aparecer", time: 26.4 },
  { text: "Quiero dejar de recordar como te fuiste", time: 28.9 },
  { text: "Estoy cansada ya de que aparezcas otra vez", time: 35.0 },
  { text: "Cuando te fuiste", time: 40.2 },
  { text: "Y ya sé que no vas a volver", time: 43.6 },
  { text: "Y para qué, quisiera que", time: 46.1 },
  { text: "Aunque no entiendo por qué fuiste así", time: 48.2 },
  { text: "¿Por qué?", time: 50.8 },
  { text: "En mi cara te largaste", time: 51.8 },
  { text: "Ni una palabra dijiste", time: 53.8 },
  { text: "Ya vete ya no puedo más", time: 56.5 },
  { text: "Lárgate de mí, ya no vuelvas más", time: 58.8 },
  { text: "(Más)", time: 62.9 },
  { text: "Y ya no vuelvas más", time: 68.4 },
  { text: "Más", time: 70.2 },
  { text: "Tal vez solo deba seguir yendo a terapia", time: 77.5 },
  { text: "Aunque es difícil cuando no puedo gritar", time: 85.7 },
  { text: "En la cara", time: 91.2 },
  { text: "¿Qué mierda fue esa?", time: 94.2 },
  { text: "¿Por qué hiciste eso?", time: 96.2 },
  { text: "No te comprendo", time: 98.5 },
  { text: "No creo que pueda", time: 101.3 },
  { text: "Ya deja de joder mi pecho", time: 103.7 },
  { text: "Con tu traición y que eras mi amigo", time: 107.3 },
  { text: "Y ya deja de aparecer", time: 111.9 },
  { text: "Porque no puedo más con recordar", time: 114.3 },
  { text: "De donde viene este dolor", time: 116.9 },
  { text: "Viene desde tu corazón", time: 119.2 },
  { text: "Creí conocerlo, pero me equivoqué otra vez", time: 121.3 },
  { text: "Y ya no quiero cargar esto solo superar", time: 124.9 },
  { text: "Lo", time: 141.1 },
  { text: "Solo superar-teeeeeeeeeeeeee", time: 148.3 },
  { text: "Quiero superarte", time: 153.7 },
  { text: "Quiero poder verte", time: 155.7 },
  { text: "No quiero abrazarte", time: 158.2 },
  { text: "Pero por lo menos", time: 160.6 },
  { text: "Que estés tranquilo", time: 161.4 },
  { text: "En mi mente", time: 162.3 }
];
function updateLyrics() {
  const currentTime = audio.currentTime;  // usa decimales directos
  // Encuentra la línea más reciente cuyo time <= currentTime
  let currentLine = null;
  for (let line of lyricsData) {
    if (currentTime >= line.time) {
      currentLine = line;
    } else {
      break;  // ya que está ordenado
    }
  }

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;  // o agrega fade si quieres
    // Opcional: fade out al final de línea (ej. si sabes duración aprox por línea ~5s)
    // const timeInLine = currentTime - currentLine.time;
    // if (timeInLine > 4) lyrics.style.opacity = Math.max(0, 1 - (timeInLine - 4)/1);
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;
  }
}

// Mejora intervalo a 200ms para más fluidez
setInterval(updateLyrics, 200);