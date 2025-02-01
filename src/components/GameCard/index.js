import ThemeChange from '../../context/ThemeChange'
import {
  GameImg,
  GameName,
  ViewCount,
  World,
  GameContainer,
} from './styledComponents'

const GameCard = props => {
  const {eachItem} = props
  const {thumbnailUrl, title, viewCount} = eachItem
  return (
    <ThemeChange.Consumer>
      {value => {
        const {isDark} = value
        const gameName = isDark ? '#ffffff' : '#0f0f0f'
        return (
          <GameContainer>
            <>
              <GameImg src={thumbnailUrl} />
              <GameName gameName={gameName}>{title}</GameName>
              <ViewCount>{viewCount} Watching</ViewCount>
              <World>Worldwide</World>
            </>
          </GameContainer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default GameCard
