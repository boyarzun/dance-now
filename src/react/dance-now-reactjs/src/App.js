import React, { useState } from "react"
import "./bootstrap.min.css"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Category from "./pages/Category"
import Songs from "./pages/Songs"
import Settings from "./pages/Settings"

import { SongsList, Categories } from "./songs/songs"

import Crown from "./assets/img/crown.png"
import Avatar from "./assets/img/DaddyCool_P1_Ava.png"

function App() {
  const [filteredSongs, setFilteredSongs] = useState([])
  const [searchBarValue, setSearchBarValue] = useState("")

  return (
    <Router>
      <header>
        <div className="fixed-top">
          <div className="profile-section d-flex align-items-center float-end">
            <img className="profile-img" src={Avatar} alt="" />
            <button className="button-vip">
              {" "}
              <img src={Crown} alt="" /> VIP
            </button>
          </div>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home Categories={Categories} />
        </Route>
        <Route path="/category/:id">
          <Category Categories={Categories} SongsList={SongsList} />
        </Route>
        <Route path="/songs">
          <Songs
            SongsList={SongsList}
            filteredSongs={filteredSongs}
            setFilteredSongs={setFilteredSongs}
            searchBarValue={searchBarValue}
            setSearchBarValue={setSearchBarValue}
            Songs={SongsList}
          />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>

      <nav className="navbar fixed-bottom navbar-light bg-white">
        <div className="container-fluid text-center">
          <div className="col-4">
            <NavLink exact={true} to="/" activeClassName="active">
              <i className="material-icons">video_library</i>
            </NavLink>
          </div>
          <div className="col-4">
            <NavLink to="/songs" activeClassName="active">
              <i className="material-icons">library_music</i>
            </NavLink>
          </div>
          <div className="col-4">
            <NavLink to="/settings" activeClassName="active">
              <i className="material-icons">settings</i>
            </NavLink>
          </div>
        </div>
      </nav>
    </Router>
  )
}

export default App
