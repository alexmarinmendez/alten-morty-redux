import { connect } from 'react-redux'
import "../assets/styles/components/FavoriteList.scss"
import Character from './Character'
import Empty from './Empty'

const FavoriteList = (props) => {
  const { favoriteCharacters } = props

  return (
    <div className='favoriteList'>
      {
        !favoriteCharacters.length
        ? <Empty />
        : favoriteCharacters.map(item => {
          return <Character key={item.id} data={item} />
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  }
}

export default connect(mapStateToProps, null)(FavoriteList)