import React from "react"
import Banner from "./../assets/img/banner.jpg"
import { Link } from "react-router-dom"

export default function Home(props) {
  let { Categories } = props

  return (
    <section className="container-md">
      <div className="row">
        <div className="col-sm banner">
          <img src={Banner} alt="" />
        </div>
      </div>

      <div className="row" id="categories">
        <h4>Recommended</h4>
        {Object.entries(Categories)
          .filter((category) => category[1].img)
          .map((category) => (
            <div className="col-4 col-sm-3 col-lg-2 category">
              <Link to={`/category/${category[0]}`}>
                <img src={`${category[1].img}`} width="100%" alt="" />
              </Link>
              <Link to={`/category/${category[0]}`}>
                <p className="category-name">{category[1].name}</p>
              </Link>
            </div>
          ))}
      </div>
    </section>
  )
}
