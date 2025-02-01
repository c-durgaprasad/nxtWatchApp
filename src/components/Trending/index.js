import {Component} from 'react'
import {FaFireAlt} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeChange from '../../context/ThemeChange'
import VideoCardTwo from '../VideoCardTwo'
import {
  UlList,
  TrendingContainer,
  Trends,
  IconDiv,
  IconBg,
  IconName,
  LoaderContainer,
  TrendingBg,
} from './styledComponents'

import './index.css'
import FailureView from '../FailureView'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {videosList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
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

  reTry = () => {
    this.setState(this.getTrendingVideos)
  }

  render() {
    this.renderTrendingView = () => {
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

    this.renderSuccessView = () => {
      const {videosList} = this.state

      return (
        <UlList>
          {videosList.map(eachVideo => (
            <VideoCardTwo eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </UlList>
      )
    }

    this.renderFailureView = () => <FailureView retry={this.reTry} />

    this.renderLoadingView = () => (
      <LoaderContainer>
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
        </div>
      </LoaderContainer>
    )

    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark} = value
          const divColor = isDark ? '#313131' : '#f1f1f1'
          const iconBg = isDark ? '#000000' : '#d7dfe9'
          const iconName = isDark ? '#ffffff' : '#000000'
          const trendBgColor = isDark ? '#0f0f0f' : '#f1f5f9'
          return (
            <>
              <Header />
              <TrendingContainer>
                <SideBar />
                <Trends>
                  <IconDiv divColor={divColor}>
                    <IconBg iconBg={iconBg}>
                      <FaFireAlt className="icon" />
                    </IconBg>
                    <IconName iconName={iconName}>Trending</IconName>
                  </IconDiv>

                  <TrendingBg trendBgColor={trendBgColor}>
                    {this.renderTrendingView()}
                  </TrendingBg>
                </Trends>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Trending
