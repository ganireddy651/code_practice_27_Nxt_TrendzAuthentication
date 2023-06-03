import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
      />
    </div>
    <ul className="nav-links-container">
      <Link to="/" className="nav-link">
        <li className="link-text">Home</li>
      </Link>
      <Link to="/products" className="nav-link">
        <li className="link-text">Products</li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="link-text">Cart</li>
      </Link>
      <Link to="/logout" className="nav-link">
        <li>
          <button className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
