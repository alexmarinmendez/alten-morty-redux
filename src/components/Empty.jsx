import "../assets/styles/components/Empty.scss"
import emptyImage from '../assets/static/images/empty.png'

const Empty = () => {
  return (
    <div className="empty">
      <img src={emptyImage} alt="" className="empty-img" />
      <span className="empty-text">
        You haven't favorites
        <br />
        Go and select your favorite characters-.
      </span>
    </div>
  )
}

export default Empty