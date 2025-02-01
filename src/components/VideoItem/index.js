import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ThemeChange from '../../context/ThemeChange'
import Header from '../Header'
import {VideoBg, VideoBlog, LoaderContainer} from './styledComponents'

import VideoCardThree from '../VideoCardThree'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: modifiedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoDetails} = this.state
    return (
      <>
        <VideoCardThree videoDetails={videoDetails} />
      </>
    )
  }

  renderFailureView = () => <FailureView />

  renderVideoItems = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark} = value
          const videoBgColor = isDark ? '#0f0f0f' : '#f1f5f9'

          return (
            <>
              <Header />
              <VideoBlog>
                <SideBar />
                <VideoBg videoBgColor={videoBgColor}>
                  {this.renderVideoItems()}
                </VideoBg>
              </VideoBlog>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default VideoItem
