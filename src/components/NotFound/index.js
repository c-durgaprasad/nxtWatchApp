import Header from '../Header'
import {
  NotFoundBg,
  NoFound,
  NotFoundImg,
  Page,
  Des,
  SideFound,
} from './styledComponents'
import ThemeChange from '../../context/ThemeChange'
import SideBar from '../SideBar'

const NotFound = () => (
  <ThemeChange.Consumer>
    {value => {
      const {isDark} = value
      const img = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const page = isDark ? '#f1f5f9' : '#212121'
      const notFoundBg = isDark ? '#0f0f0f' : '#e2e8f0'

      return (
        <NotFoundBg notFoundBg={notFoundBg}>
          <Header />
          <SideFound>
            <SideBar />
            <NoFound>
              <NotFoundImg src={img} alt="not found" />
              <Page page={page}>Page Not Found</Page>
              <Des>
                we are sorry, the page you requested could not be found.
              </Des>
            </NoFound>
          </SideFound>
        </NotFoundBg>
      )
    }}
  </ThemeChange.Consumer>
)

export default NotFound
