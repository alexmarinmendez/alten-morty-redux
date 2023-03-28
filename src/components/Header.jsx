import "../assets/styles/components/Header.scss"
import Logo from "../assets/static/images/logo.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setSection } from "../actions"

const Header = () => {
  const sectionActive = useSelector(state => state.sectionActive)
  const dispatch = useDispatch()

  const handlerSetSection = section => {
    dispatch(setSection(section))
  }

  return (
    <div className="header">
      <figure>
        <img src={Logo} alt="" className="header__logo-img"/>
        <nav>
          <ul className="header__nav__options">
            <li 
              onClick={() => handlerSetSection('Characters')}
              className={`header__nav__options-item ${sectionActive === "Characters" ? "active" : ""}`}
            >
              <Link to="/">Characters</Link>
            </li>
            <li 
              onClick={() => handlerSetSection('Favorites')}
              className={`header__nav__options-item ${sectionActive === "Favorites" ? "active" : ""}`}
            >
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </figure>
    </div>
  )
}

export default Header