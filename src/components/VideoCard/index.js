import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  Video,
  VideoBg,
  ThumbnailImg,
  ThumbnailDetails,
  VideoDetail,
  ProfileImg,
  VideoTitle,
  VideoDesc,
  VideoName,
  ViewCount,
  Published,
} from './styledComponents'

import ThemeChange from '../../context/ThemeChange'

class VideoCard extends Component {
  render() {
    const {eachVideo} = this.props

    const {publishedAt, thumbnailUrl, title, viewCount, channel, id} = eachVideo
    const {profileImageUrl, name} = channel
    const date = formatDistanceToNow(new Date(publishedAt))

    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark, changeTab} = value
          const videoTitle = isDark ? '#ffffff' : '#1e293b'
          const tabChange = () => {
            changeTab('')
          }

          return (
            <Video to={`/videos/${id}`} onClick={tabChange}>
              <VideoBg>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                <ThumbnailDetails>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <VideoDesc>
                    <VideoTitle videoTitle={videoTitle}>{title}</VideoTitle>
                    <VideoDetail>
                      <VideoName>{name}</VideoName>
                      <ViewCount>{viewCount} views</ViewCount>
                      <Published>{date}</Published>
                    </VideoDetail>
                  </VideoDesc>
                </ThumbnailDetails>
              </VideoBg>
            </Video>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default VideoCard
