import "../assets/styles/components/Character.scss"
import { useState } from 'react'
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg"
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import CharacterDetail from './CharacterDetail'
import Modal from './Modal'

const Character = (props) => {
  const { id, image, name, status, gender, species } = props.data
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite] = useState(false)

  const handleCloseModal = () => {}
  const handleOpenModal = () => {}

  const handleSetFavorite = () => {

  }

  const handleDeleteFavorite = () => {

  }

  return (
    <div className="character">
      <img src={image} alt="" className="character__img" />
      <div className="character__details">
        <h2 className="character__details-name">
          { name }
        </h2>
        {
          favorite
          ? <SVGStar className="character__details-star favorite" onClick={() => handleDeleteFavorite(id)} />
          : <SVGStar className="character__details-star nofavorite" onClick={() => handleSetFavorite(id)} />
        }
        <p className="character__details__item">
          <span className="character__details__item-type">Status: </span>{status}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Species: </span>{species}
        </p>
        <p className="character__details__item">
          <span className="character__details__item-type">Gender: </span>{gender}
        </p>
        <p onClick={handleOpenModal} className="character__details__item-more">
          More details...
        </p>
      </div>
    </div>
  )
}

export default Character