import ThemeChange from '../../context/ThemeChange'
import {
  GameImg,
  GameName,
  ViewCount,
  World,
  GameContainer,
  GameLink,
} from './styledComponents'

const GameCard = props => {
  const {eachItem} = props
  const {thumbnailUrl, title, viewCount, id} = eachItem
  return (
    <ThemeChange.Consumer>
      {value => {
        const {isDark} = value
        const gameName = isDark ? '#ffffff' : '#0f0f0f'
        return (
          <GameContainer>
            <GameLink to={`/videos/${id}`}>
              <GameImg src={thumbnailUrl} alt="video thumbnail" />
              <GameName gameName={gameName}>{title}</GameName>
              <ViewCount>{viewCount} Watching</ViewCount>
              <World>Worldwide</World>
            </GameLink>
          </GameContainer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default GameCard
