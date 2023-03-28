import "../assets/styles/components/Loader.scss"
import portal from "../assets/static/images/portal.gif"

const Loader = () => {
  return (
    <div className="loader">
      <img src={portal} alt="" />
      <span className="loader-text">Loading...</span>
    </div>
  )
}

export default Loader