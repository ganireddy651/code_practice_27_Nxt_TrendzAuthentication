import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSubmitSuccess = () => {
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    if (username === '' || password === '') {
      this.setState({errorMessage: `*Username and Password didn't match`})
    } else if (
      (username !== '' && password === '') ||
      (username === '' && password !== '')
    ) {
      this.setState({errorMessage: `*Username and Password didn't match`})
    } else {
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess()
      } else {
        this.setState({errorMessage: `*Username and Password didn't match`})
      }
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMessage} = this.state
    console.log(username)

    return (
      <div className="login-container">
        <img
          className="login-container-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
        />
        <form onSubmit={this.submitForm} className="form-container">
          <img
            className="form-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
          />
          <div className="user-input-container">
            <label className="username" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              className="input"
              id="username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="user-password-container">
            <label className="password" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              className="input"
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
            <p className="error-message">{errorMessage}</p>
          </div>
          <div className="button-container">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginFrom
