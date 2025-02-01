import ReactPlayer from 'react-player'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  VideoItems,
  Player,
  VideoTitle,
  ViewDate,
  ViewCount,
  Published,
  LikeIcon,
  DisIcon,
  SaveIcon,
  IconDiv,
  LikeButton,
  DisLikeButton,
  SaveButton,
  IconsView,
  ProfileImg,
  ChannelName,
  SubscriberCount,
  Description,
  ChannelDetails,
  NameSub,
  Details,
} from './styledComponents'
import ThemeChange from '../../context/ThemeChange'
import './index.css'

class VideoCardThree extends Component {
  state = {
    isPlaying: false,
    isLike: false,
    isDislike: false,
    isSave: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  Liked = () => {
    const {isLike} = this.state
    this.setState({isLike: !isLike, isDislike: false})
  }

  DisLiked = () => {
    const {isDislike} = this.state
    this.setState({isDislike: !isDislike, isLike: false})
  }

  render() {
    const {videoDetails} = this.props
    const {
      id,
      channel,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      thumbnailUrl,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel
    const date = formatDistanceToNow(new Date(publishedAt))
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark, addVideoToList} = value
          const videoTitle = isDark ? '#ffffff' : '#1e293b'
          const channelName = isDark ? '#ffffff' : '#0f0f0f'
          const descriptionText = isDark ? '#ffffff' : '#64748b'
          const {isLike, isDislike, isSave} = this.state
          const likeColor = isLike ? '#2563eb' : '#64748b'
          const dislikeColor = isDislike ? '#2563eb' : '#64748b'
          const saveColor = isSave ? '#4f46e5' : '#64748b'
          const save = isSave ? 'Saved' : 'Save'

          const saved = () => {
            this.setState({isSave: !isSave})
            const video = {
              id,
              title,
              viewCount,
              publishedAt,
              thumbnailUrl,
              channel,
            }
            addVideoToList(video)
          }

          return (
            <>
              <Player>
                <ReactPlayer
                  width="95%"
                  url={videoUrl}
                  playing={this.isPlaying}
                  className="player"
                />
              </Player>
              <VideoItems>
                <VideoTitle videoTitle={videoTitle}>{title}</VideoTitle>
                <Details>
                  <ViewDate>
                    <ViewCount>{viewCount} views</ViewCount>
                    <Published>{date}</Published>
                  </ViewDate>
                  <>
                    <IconsView>
                      <IconDiv onClick={this.Liked}>
                        <LikeIcon likeColor={likeColor}>
                          <BiLike />
                        </LikeIcon>
                        <LikeButton type="button" likeColor={likeColor}>
                          Like
                        </LikeButton>
                      </IconDiv>
                      <IconDiv onClick={this.DisLiked}>
                        <DisIcon dislikeColor={dislikeColor}>
                          <BiDislike />
                        </DisIcon>
                        <DisLikeButton
                          type="button"
                          dislikeColor={dislikeColor}
                        >
                          Dislike
                        </DisLikeButton>
                      </IconDiv>
                      <IconDiv onClick={saved}>
                        <SaveIcon saveColor={saveColor}>
                          <MdPlaylistAdd />
                        </SaveIcon>
                        <SaveButton type="button" saveColor={saveColor}>
                          {save}
                        </SaveButton>
                      </IconDiv>
                    </IconsView>
                  </>
                </Details>
                <hr width="95%" />
                <ChannelDetails>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <NameSub>
                    <ChannelName channelName={channelName}>{name}</ChannelName>
                    <SubscriberCount>
                      {subscriberCount} Subscribers
                    </SubscriberCount>
                  </NameSub>
                </ChannelDetails>

                <Description descriptionText={descriptionText}>
                  {description}
                </Description>
              </VideoItems>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default VideoCardThree
