import {formatDistanceToNow} from 'date-fns'

import {
  ListItem,
  VideoBg,
  ThumbnailImg,
  ProfileImg,
  Bottom,
  VideoTitle,
  VideoName,
  ViewCount,
  Published,
  VideoDetails,
  Video,
} from './styledComponents'
import ThemeChange from '../../context/ThemeChange'

const VideoCardTwo = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, viewCount, publishedAt, channel, id} = eachVideo
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeChange.Consumer>
      {value => {
        const {isDark} = value
        const videoTitle = isDark ? '#ffffff' : '#1e293b'
        return (
          <ListItem>
            <VideoBg to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <Video>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <VideoDetails>
                    <VideoTitle videoTitle={videoTitle}>{title}</VideoTitle>
                    <Bottom>
                      <VideoName>{channel.name}</VideoName>
                      <ViewCount>{viewCount} views</ViewCount>
                      <Published>{date}</Published>
                    </Bottom>
                  </VideoDetails>
                </div>
              </Video>
            </VideoBg>
          </ListItem>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default VideoCardTwo
