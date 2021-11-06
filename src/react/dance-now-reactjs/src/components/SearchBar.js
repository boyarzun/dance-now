import React from "react"

export default function SearchBar(props) {
  let {
    setFilteredSongs,
    searchBarValue,
    setSearchBarValue,
    Songs
  } = props

  const searchBarKeyUp = (event) => {
    setSearchBarValue(event.target.value)

    setFilteredSongs(
      Object.values(Songs).filter((song) =>
        song.name.toLowerCase().includes(searchBarValue.toLowerCase())
      )
    )
  }

  return (
    <input
      type="text"
      className="search col-12"
      onChange={searchBarKeyUp}
      value={searchBarValue}
      placeholder="Search the song library"
    />
  )
}
