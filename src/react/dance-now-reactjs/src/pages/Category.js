import React from "react"
import { useParams } from "react-router-dom"
import { renderCategory } from "./../utils/utils"

export default function Category(props) {
  let { id } = useParams()
  let { Categories, SongsList } = props

  return (
    <section className="container-md">
      <div className="row">
        <div className="col-12">
          <div className="row" id="songs">
            {renderCategory(
              Object.values(SongsList),
              Categories[id].name,
              parseInt(id)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
