var songsSection = document.getElementById('songs');

var alphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'O', 'U', 'I', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function drawSongsSection(songs) {
    songsSection.innerHTML = '';
    alphabet.map(letter => {
        var songsFilteredByLetter = songs.filter(song => song.name[0] == letter);

        if (songsFilteredByLetter.length) {
            var beginHTML = '<div class="row">';
            var title = `<h1 id="${letter}">${letter}</h1><div class="col-12"><hr></div>`;
            var endHTML = '</div>';
            var content = '';

            songsFilteredByLetter.map(song => {
                content += `<div class="col-4 col-sm-3 col-lg-2 category">
             <a href="https://youtu.be/${song.youtubeId}?t=${song.youtubeTime}" target="_blank">   
                <img class="song-img" src="http://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg" width="100%">
            </a>
            <a href="https://youtu.be/${song.youtubeId}?t=${song.youtubeTime}" target="_blank">
                <p class="song-name">${song.name}</p>
            </a>
            </div>`;
            });

            songsSection.innerHTML += beginHTML + title + content + endHTML;

        }
    });
}

function searchSongs(event) {
    var word = event.value;
    var arraySongs = Object.values(songs).filter(song => song.name.toLowerCase().includes(word.toLowerCase()));
    drawSongsSection(arraySongs);
}

function drawAlphabet(alphabet) {
    var alphabetElement = document.getElementById('alphabet');
    alphabet.forEach(letter => {
        alphabetElement.innerHTML += `<a href="#${letter}">${letter}</a>`;
    });
}

var arraySongs = Object.values(songs);
drawSongsSection(arraySongs);
drawAlphabet(alphabet);