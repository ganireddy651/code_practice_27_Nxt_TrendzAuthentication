import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="cloths-container">
      <div className="home-page-content-container">
        <h1 className="cloths-heading">Clothes That Get YOU Noticed</h1>
        <p className="cloths-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-btn" type="button">
          Shop Now
        </button>
      </div>
      <div className="cloths-image-container">
        <img
          className="cloths-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
