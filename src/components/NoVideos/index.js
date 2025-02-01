import ThemeChange from '../../context/ThemeChange'
import {
  NoVideosContainer,
  NoVideosImg,
  NoFound,
  Des,
  RetryBtn,
} from './styledComponents'

const NoVideos = props => {
  const {reTry} = props
  return (
    <ThemeChange.Consumer>
      {value => {
        const {isDark} = value
        const noFoundText = isDark ? '#ffffff' : '#212121'
        const desColor = isDark ? '#94a3b8' : '#475569'
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoFound noFoundText={noFoundText}>No Search results found</NoFound>
            <Des desColor={desColor}>
              Try different key words or remove search filter
            </Des>
            <RetryBtn onClick={reTry}>Retry</RetryBtn>
          </NoVideosContainer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default NoVideos
