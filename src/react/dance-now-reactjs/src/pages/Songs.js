import React from "react"
import SearchBar from "./../components/SearchBar"
import { renderSongSections, drawAlphabet } from "./../utils/utils"

export default function Songs(props) {
  let {
    SongsList,
    searchBarValue,
    setSearchBarValue,
    filteredSongs,
    setFilteredSongs,
    Songs
  } = props

  return (
    <section className="container-md">
      <div className="row">
        <div className="col-12">
          <SearchBar
            filteredSongs={filteredSongs}
            setFilteredSongs={setFilteredSongs}
            searchBarValue={searchBarValue}
            setSearchBarValue={setSearchBarValue}
            Songs={Songs}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-11 songs">
          <div className="row" id="songs">
            {renderSongSections(filteredSongs.length ? filteredSongs : Object.values(SongsList))}
          </div>
        </div>

        <div className="col-1 position-fixed alphabet" id="alphabet">
          {drawAlphabet()}
        </div>
      </div>
    </section>
  )
}
