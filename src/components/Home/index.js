import {Component} from 'react'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import NoVideos from '../NoVideos'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  SearchInputContainer,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  SearchButton,
  LoaderContainer,
  VideoCardContainer,
  VideoPremium,
  HomeBg,
  HomeSideNav,
  WebsiteLogo,
  LogoContent,
  GetButton,
  Premium,
  CloseButton,
  LogoCon,
  VideosContainer,
} from './styledComponents'
import ThemeChange from '../../context/ThemeChange'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstant.initial,
    searchInput: '',
    close: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onChangeSearch = () => {
    const {searchInput, videosList} = this.state
    const searchList = videosList.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchInput),
    )
    this.setState({videosList: searchList})
  }

  reTry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    const videos = videosList.length <= 0

    return (
      <VideoCardContainer>
        {videos ? (
          <NoVideos reTry={this.reTry} />
        ) : (
          videosList.map(eachVideo => (
            <VideoCard eachVideo={eachVideo} key={eachVideo.id} />
          ))
        )}
      </VideoCardContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView reTry={this.reTry} />

  renderSwitchView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.success:
        return this.renderSuccessView()
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
          const {close} = this.state
          const searchBg = isDark ? 'transparent' : '#ffffff'
          const iconBg = isDark ? '#424242' : '#e2e8f0'
          const videoBgColor = isDark ? '#181818' : '#f1f1f1'

          const onChangeSearchInput = event => {
            this.setState({searchInput: event.target.value})
          }

          const enterInput = () => {
            this.getHomeVideos()
          }
          const closeBanner = () => {
            this.setState({close: true})
          }

          return (
            <>
              <HomeBg>
                <Header />
                <HomeSideNav>
                  <SideBar />
                  <VideoPremium>
                    <Premium data-testid="banner">
                      <LogoCon>
                        <WebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          onClick={closeBanner}
                          type="button"
                          data-testid="close"
                        >
                          <IoMdClose />
                        </CloseButton>
                      </LogoCon>
                      {close ? (
                        ''
                      ) : (
                        <LogoContent>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </LogoContent>
                      )}

                      <GetButton type="button">GET IT NOW</GetButton>
                    </Premium>
                    <VideosContainer
                      videoBgColor={videoBgColor}
                      data-testid="home"
                    >
                      <SearchInputContainer>
                        <SearchContainer searchBg={searchBg}>
                          <SearchInput
                            type="search"
                            placeholder="Search"
                            searchBg={searchBg}
                            onChange={onChangeSearchInput}
                          />
                        </SearchContainer>
                        <SearchIconContainer iconBg={iconBg}>
                          <SearchButton
                            data-testid="searchButton"
                            onClick={enterInput}
                            type="button"
                          >
                            <IoIosSearch />
                          </SearchButton>
                        </SearchIconContainer>
                      </SearchInputContainer>
                      {this.renderSwitchView()}
                    </VideosContainer>
                  </VideoPremium>
                </HomeSideNav>
              </HomeBg>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Home
