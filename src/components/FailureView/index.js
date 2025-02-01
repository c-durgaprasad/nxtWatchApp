import ThemeChange from '../../context/ThemeChange'

import {
  FailureContainer,
  FailureImg,
  Oops,
  TryAgain,
  RetryBtn,
} from './styledComponents'

const FailureView = props => {
  const {reTry} = props
  return (
    <ThemeChange.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const oopsColor = isDark ? '#ffffff' : '#313131'
        return (
          <FailureContainer>
            <FailureImg src={failureImage} alt="failure view" />
            <Oops oopsColor={oopsColor}>Oops! Something Went Wrong</Oops>
            <TryAgain>
              We are having some trouble to complete your request. Please try
              again.
            </TryAgain>
            <RetryBtn onClick={reTry}>Retry</RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default FailureView
