import "../assets/styles/components/Error.scss"
import errorImage from "../assets/static/images/error.png"

const Error = () => {
  return (
    <div className="error">
      <img src={errorImage} alt="" className="error-img" />
      <span className="error-text">Sorry, an error has occurred.</span>
    </div>
  )
}

export default Error