import {Component} from 'react'
import {FaFireAlt} from 'react-icons/fa'
import ThemeChange from '../../context/ThemeChange'
import Header from '../Header'
import {
  SavedVideosBg,
  NoVideos,
  NoVideosImage,
  VideoHead,
  VideoDes,
  NoVideosBg,
  Save,
  UlList,
  IconDiv,
  IconBg,
  IconName,
  SavedListBg,
  SavedSideBar,
} from './styledComponents'
import SavedCard from '../SavedCard'
import SideBar from '../SideBar'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark, savedList} = value
          const noVideosBg = isDark ? '#0f0f0f' : '#f1f1f1'
          const videoHead = isDark ? '#ffffff' : '#0f0f0f'
          const videoDes = isDark ? '#f1f1f1' : '#64748b'
          const videoCount = savedList.length <= 0
          const divColor = isDark ? '#313131' : '#f1f1f1'
          const iconBg = isDark ? '#000000' : '#d7dfe9'
          const iconName = isDark ? '#ffffff' : '#000000'
          const savedBgColor = isDark ? '#0f0f0f' : '#f1f5f9'
          return (
            <>
              <Header />
              <SavedSideBar>
                <SideBar />
                <SavedVideosBg>
                  {videoCount && (
                    <NoVideosBg noVideosBg={noVideosBg}>
                      <NoVideos>
                        <NoVideosImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                          alt="no saved videos"
                        />
                        <VideoHead videoHead={videoHead}>
                          No saved videos found
                        </VideoHead>
                        <VideoDes videoDes={videoDes}>
                          You can save your videos while watching them
                        </VideoDes>
                      </NoVideos>
                    </NoVideosBg>
                  )}
                  {!videoCount && (
                    <>
                      <Save>
                        <IconDiv divColor={divColor}>
                          <IconBg iconBg={iconBg}>
                            <FaFireAlt className="icon" />
                          </IconBg>
                          <IconName iconName={iconName}>Saved Videos</IconName>
                        </IconDiv>
                        <SavedListBg savedBgColor={savedBgColor}>
                          {savedList.map(eachVideo => (
                            <UlList>
                              <SavedCard
                                eachVideo={eachVideo}
                                key={eachVideo.id}
                              />
                            </UlList>
                          ))}
                        </SavedListBg>
                      </Save>
                    </>
                  )}
                </SavedVideosBg>
              </SavedSideBar>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default SavedVideos
