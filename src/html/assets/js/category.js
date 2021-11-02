var songsSection = document.getElementById('songs');

function drawSongsSection(songs, id) {
    songsSection.innerHTML = '';
    var songsFilteredByCategoryId = songs.filter(song => song.category.includes(id));

    if (songsFilteredByCategoryId.length) {
        var beginHTML = '<div class="row">';
        var title = `<h1 id="${categories[id].name}">${categories[id].name}</h1><div class="col-12"><hr></div>`;
        var endHTML = '</div>';
        var content = '';

        songsFilteredByCategoryId.map(song => {
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
}

var urlParams = new URLSearchParams(window.location.search);
var categoryId = parseInt(urlParams.get('id'), 10);



var arraySongs = Object.values(songs);
drawSongsSection(arraySongs, categoryId);