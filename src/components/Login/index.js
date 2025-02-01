import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeChange from '../../context/ThemeChange'

import {
  LoginBg,
  LoginCard,
  FormContainer,
  LogoContainer,
  LoginDetails,
  LoginLogo,
  Label,
  InputType,
  Checkbox,
  Show,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', checked: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.push('/')
  }

  onSubmitFailure = error => {
    this.setState({errMsg: `*${error}`})
  }

  onUserSubmit = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = `https://apis.ccbp.in/login`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getUserPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  renderLoginForm = () => {
    const {errMsg, checked, username, password} = this.state
    const passwordShow = checked ? 'text' : 'password'
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <FormContainer onSubmit={this.onUserSubmit}>
        <LoginDetails>
          <Label htmlFor="username">USERNAME</Label>
          <InputType
            type="text"
            id="username"
            placeholder="Username"
            onChange={this.getUsername}
            value={username}
          />
          <br />
          <Label htmlFor="password">PASSWORD</Label>
          <InputType
            type={passwordShow}
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.getUserPassword}
          />
        </LoginDetails>
        <Checkbox
          type="checkbox"
          id="show"
          value={password}
          onChange={this.showPassword}
        />
        <Show htmlFor="show">Show Password</Show>
        <br />

        <LoginButton type="submit">Login</LoginButton>

        <ErrorMsg>{errMsg}</ErrorMsg>
      </FormContainer>
    )
  }

  renderLoginLogo = () => (
    <LogoContainer>
      <LoginLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </LogoContainer>
  )

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginBg>
              <LoginCard>
                {this.renderLoginLogo()}
                {this.renderLoginForm()}
              </LoginCard>
            </LoginBg>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Login
