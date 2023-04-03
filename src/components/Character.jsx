import "../assets/styles/components/Character.scss"
import { useEffect, useState } from 'react'
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg"
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import CharacterDetail from './CharacterDetail'
import Modal from './Modal'

const Character = (props) => {
  const { data, favoriteCharacters } = props
  const { id, image, name, status, gender, species } = data
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite] = useState(false)

  const handleCloseModal = () => {
    setModal(false)
  }
  
  const handleOpenModal = () => {
    setModal(true)
  }

  const handleSetFavorite = () => {
    props.setFavorite(data)
    setFavorite(true)
  }

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId)
    setFavorite(false)
  }

  const isFavorite = () => {
    const result = favoriteCharacters.filter(item => item.id === id)
    if (result.length) {
      setFavorite(true)
    }
  }

  useEffect(() => {
    isFavorite()
  }, [])

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
          : <SVGStar className="character__details-star noFavorite" onClick={handleSetFavorite} />
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

      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={props.data} />
      </Modal>

    </div>
  )
}

//react-redux native (whith HOC)
const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters
  }
}

const mapDispatchToProps = {
  setFavorite, deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)