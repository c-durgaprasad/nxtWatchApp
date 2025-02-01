import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import Header from '../Header'
import GameCard from '../GameCard'
import SideBar from '../SideBar'

import ThemeChange from '../../context/ThemeChange'

import {
  IconDiv,
  IconBg,
  IconName,
  LoaderContainer,
  GameContainer,
  GamingBg,
  GameView,
  Games,
} from './styledComponents'
import FailureView from '../FailureView'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {videosList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const modifiedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: modifiedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  render() {
    this.renderGamingView = () => {
      const {apiStatus} = this.state

      switch (apiStatus) {
        case apiStatusConstant.success:
          return this.renderSuccessView()
        case apiStatusConstant.failure:
          return this.renderFailureView()
        case apiStatusConstant.inProgress:
          return this.renderLoadingView()
        default:
          return null
      }
    }

    this.reTry = () => {
      this.setState(this.getGamingVideos)
    }

    this.renderFailureView = () => <FailureView retry={this.reTry} />

    this.renderLoadingView = () => (
      <LoaderContainer>
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
        </div>
      </LoaderContainer>
    )

    this.renderSuccessView = () => {
      const {videosList} = this.state
      return (
        <GameContainer>
          {videosList.map(eachItem => (
            <GameCard eachItem={eachItem} />
          ))}
        </GameContainer>
      )
    }

    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark} = value
          const divColor = isDark ? '#313131' : '#f1f1f1'
          const iconBg = isDark ? '#000000' : '#d7dfe9'
          const iconName = isDark ? '#ffffff' : '#000000'
          const gameBgColor = isDark ? '#0f0f0f' : '#f1f5f9'

          return (
            <>
              <Header />
              <GameView>
                <SideBar />
                <Games>
                  <IconDiv divColor={divColor}>
                    <IconBg iconBg={iconBg}>
                      <SiYoutubegaming className="icon" />
                    </IconBg>
                    <IconName iconName={iconName}>Gaming</IconName>
                  </IconDiv>
                  <GamingBg gameBgColor={gameBgColor}>
                    {this.renderGamingView()}
                  </GamingBg>
                </Games>
              </GameView>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Gaming
