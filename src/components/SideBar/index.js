import {Component} from 'react'

import {RiHome4Fill} from 'react-icons/ri'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideMenu,
  SideBarBg,
  NavUl,
  NavLi,
  IconName,
  Icon,
  ContactUs,
  SocialIcons,
  Social,
  SmIcon,
  Des,
  About,
} from './styledComponents'
import ThemeChange from '../../context/ThemeChange'

class SideBar extends Component {
  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark, activeTab, changeTab} = value
          const changeHomeTab = () => {
            changeTab('Home')
          }
          const changeTrendTab = () => {
            changeTab('Trending')
          }
          const changeGameTab = () => {
            changeTab('Gaming')
          }
          const changeSaveTab = () => {
            changeTab('Save')
          }
          const bg = isDark ? '#231f20' : '#ffffff'
          const textColor = isDark ? '#f1f5f9' : '#424242'
          const tabColor = isDark ? '#424242' : '#d7dfe9'
          const iconColor = isDark ? '#f1f5f9' : '#424242'
          return (
            <SideMenu>
              <SideBarBg>
                <NavUl bg={bg}>
                  <NavLi
                    to="/"
                    bgColor={activeTab === 'Home' ? tabColor : 'none'}
                    onClick={changeHomeTab}
                  >
                    <Icon
                      iconColor={activeTab === 'Home' ? '#ff0000' : iconColor}
                    >
                      <RiHome4Fill />
                    </Icon>
                    <IconName
                      textColor={textColor}
                      weight={activeTab === 'Home' ? '800' : ''}
                    >
                      Home
                    </IconName>
                  </NavLi>

                  <NavLi
                    to="/trending"
                    bgColor={activeTab === 'Trending' ? tabColor : 'none'}
                    onClick={changeTrendTab}
                  >
                    <Icon
                      iconColor={
                        activeTab === 'Trending' ? '#ff0000' : iconColor
                      }
                    >
                      <FaFireAlt />
                    </Icon>

                    <IconName
                      textColor={textColor}
                      weight={activeTab === 'Trending' ? '800' : ''}
                    >
                      Trending
                    </IconName>
                  </NavLi>
                  <NavLi
                    to="/gaming"
                    bgColor={activeTab === 'Gaming' ? tabColor : 'none'}
                    onClick={changeGameTab}
                  >
                    <Icon
                      iconColor={activeTab === 'Gaming' ? '#ff0000' : iconColor}
                    >
                      <SiYoutubegaming />
                    </Icon>

                    <IconName
                      textColor={textColor}
                      weight={activeTab === 'Gaming' ? '800' : ''}
                    >
                      Gaming
                    </IconName>
                  </NavLi>
                  <NavLi
                    to="/saved-videos"
                    bgColor={activeTab === 'Save' ? tabColor : 'none'}
                    onClick={changeSaveTab}
                  >
                    <Icon
                      iconColor={activeTab === 'Save' ? '#ff0000' : iconColor}
                    >
                      <MdPlaylistAdd />
                    </Icon>

                    <IconName
                      textColor={textColor}
                      weight={activeTab === 'Save' ? '800' : ''}
                    >
                      Saved videos
                    </IconName>
                  </NavLi>
                  <About>
                    <ContactUs textColor={textColor}>CONTACT US</ContactUs>
                    <SocialIcons>
                      <Social>
                        <SmIcon
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                          alt="facebook logo"
                        />
                      </Social>
                      <Social>
                        <SmIcon
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                          alt="twitter logo"
                        />
                      </Social>
                      <Social>
                        <SmIcon
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                          alt="linked in logo"
                        />
                      </Social>
                    </SocialIcons>
                    <Des textColor={textColor}>
                      Enjoy! Now to see your channels and recommendations!
                    </Des>
                  </About>
                </NavUl>
              </SideBarBg>
            </SideMenu>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default SideBar
