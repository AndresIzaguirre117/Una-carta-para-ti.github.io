// ============================================================
//  CANCIONES DE SPOTIFY
//  Pega aquí el enlace de cada canción (Spotify > ••• > Compartir
//  > Copiar enlace de la canción). Puedes agregar las que quieras.
//  Funciona también con álbumes, playlists y artistas.
// ============================================================
const SONGS = [
  { title: "Una canción para ti", artist: "", link: "https://open.spotify.com/intl-es/track/51ZgWukMc1G5DailAaRbNP?si=3ba80ca426e2426a" },
];

// Color de fondo del código (hex sin #) y color de las barras: "black" o "white"
const CODE_BG = "FFFDFB";
const CODE_BARS = "black";

function renderSongs() {
  const box = document.getElementById("songs");
  const items = SONGS.map((s) => {
    const m = String(s.link).match(/(track|album|playlist|artist)[/:]([A-Za-z0-9]{22})/);
    if (!m) return null;
    const [, type, id] = m;
    const img = `https://scannables.scdn.co/uri/plain/svg/${CODE_BG}/${CODE_BARS}/640/spotify:${type}:${id}`;
    return { ...s, url: `https://open.spotify.com/${type}/${id}`, img };
  }).filter(Boolean);

  if (!items.length) return;

 // box.innerHTML = '<p class="songs-title">Escanéalo con Spotify</p>';
  items.forEach((s) => {
    const a = document.createElement("a");
    a.className = "song-card";
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";

    const name = document.createElement("div");
    name.className = "song-name";
    name.textContent = s.title || "Una canción para ti";
    a.appendChild(name);

    if (s.artist) {
      const artist = document.createElement("div");
      artist.className = "song-artist";
      artist.textContent = s.artist;
      a.appendChild(artist);
    }

    const code = document.createElement("img");
    code.className = "song-code";
    code.src = s.img;
    code.alt = `Código de Spotify de ${s.title || "la canción"}`;
    code.loading = "lazy";
    code.addEventListener("error", () => code.remove());
    a.appendChild(code);

    const hint = document.createElement("div");
    hint.className = "song-hint";
    //hint.textContent = "o toca para abrirla";
    a.appendChild(hint);

    box.appendChild(a);
  });
  box.hidden = false;
}

renderSongs();

const scene = document.querySelector(".scene");
const replayButton = document.getElementById("replay");

if (scene && replayButton) {
  replayButton.addEventListener("click", () => {
    // Reinicia las animaciones CSS para volver a dibujar el corazón.
    scene.classList.remove("replaying");
    void scene.offsetWidth;
    scene.classList.add("replaying");
  });
}

if (scene) {
  scene.addEventListener("animationend", (event) => {
    if (event.animationName === "greetingIn") {
      scene.classList.remove("replaying");
    }
  });
}
