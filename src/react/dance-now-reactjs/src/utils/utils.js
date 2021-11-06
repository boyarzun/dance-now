import SongCard from "./../components/SongCard"
let alphabet = [
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

export function renderSongSections(songs) {
  let songsFilteredByLetter = songs.reduce((songList, song) => {
    if (!Object.keys(songList).includes(song.name[0])) {
      songList[song.name[0]] = []
    }

    songList[song.name[0]].push(song)

    return songList
  }, {})

  return Object.entries(songsFilteredByLetter).map((keyValue) =>
    getSongSection(keyValue[1], keyValue[0])
  )
}

export function renderCategory(songs, title, id) {
  let songsFilteredByCategoryId = songs.filter((song) =>
    song.category.includes(id)
  )

  if (songsFilteredByCategoryId.length) {
    return getSongSection(songsFilteredByCategoryId, title)
  }
}

function getSongSection(songs, title) {
  return (
    <div key={`section-${title}`} className="row">
      <h1 id={title}>{title}</h1>
      <div className="col-12">
        <hr />
      </div>

      {songs.map((song, index) => {
        return <SongCard key={`song-${index}`} Song={song} />
      })}
    </div>
  )
}

export function drawAlphabet() {
  return alphabet.map((letter, index) => (
    <a key={`alphabet-${index}`} href={`#${letter}`}>
      {letter}
    </a>
  ))
}
