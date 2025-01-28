// Recupera i film dal local storage o inizializza un array vuoto
let film = JSON.parse(localStorage.getItem('film')) || [];

// Funzione per salvare i film nel local storage
function salvaFilm() {
  localStorage.setItem('film', JSON.stringify(film));
}

// Funzione per visualizzare i film
function mostraFilm() {
  const filmList = document.getElementById('filmList');
  filmList.innerHTML = ''; // Pulisce la lista prima di aggiornare

  film.forEach((film, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${film.titolo} (${film.anno}) - ${film.regista}</span>
      <button onclick="rimuoviFilm(${index})">Elimina</button>
    `;
    filmList.appendChild(li);
  });
}

// Funzione per aggiungere un film
document.getElementById('filmForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impedisce il ricaricamento della pagina

  const titolo = document.getElementById('titolo').value;
  const regista = document.getElementById('regista').value;
  const anno = document.getElementById('anno').value;

  if (titolo && regista && anno) {
    const nuovoFilm = { titolo, regista, anno };
    film.push(nuovoFilm);
    salvaFilm();
    mostraFilm();
    document.getElementById('filmForm').reset(); // Resetta il form
  }
});

// Funzione per rimuovere un film
function rimuoviFilm(index) {
  film.splice(index, 1);
  salvaFilm();
  mostraFilm();
}

// Mostra i film all'avvio della pagina
mostraFilm();
