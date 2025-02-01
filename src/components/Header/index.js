import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoMenu} from 'react-icons/io5'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {RiHome4Fill} from 'react-icons/ri'
import {FaFireAlt, FaMoon} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'
import ThemeChange from '../../context/ThemeChange'
import {
  NavHeader,
  HeaderLogo,
  ContainerList,
  ContainerListItem,
  Button,
  SmallDevice,
  LargeDevice,
  Profile,
  Logout,
  MenuPop,
  ModalContainer,
  ModalContent,
  ModalRow,
  CancelButton,
  ConfirmButton,
  NavUl,
  NavLi,
  IconName,
  Icon,
} from './styledComponents'

class Header extends Component {
  state = {menu: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  clickedMenu = () => {
    this.setState(prev => ({menu: !prev.menu}))
  }

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {isDark, activeTab, changeTab, changeTheme} = value
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

          const onClickTheme = () => {
            changeTheme()
          }
          const BgColor = isDark ? '#231f20' : '#ffffff'
          const Logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const IconColor = isDark ? '#ffffff' : '#181818'
          const LogColor = isDark ? '#ffffff' : '#3b82f6'
          return (
            <NavHeader BgColor={BgColor}>
              <Link to="/">
                <HeaderLogo src={Logo} alt="website logo" />
              </Link>
              <SmallDevice>
                <ContainerList>
                  <ContainerListItem>
                    <Button
                      data-testid="theme"
                      IconColor={IconColor}
                      onClick={onClickTheme}
                    >
                      {isDark ? <FiSun /> : <FaMoon />}
                    </Button>
                  </ContainerListItem>
                  <ContainerListItem>
                    <Popup
                      modal
                      trigger={
                        <Button
                          IconColor={IconColor}
                          onClick={this.clickedMenu}
                        >
                          <IoMenu />
                        </Button>
                      }
                      className="popup-menu"
                    >
                      {close => (
                        <>
                          <MenuPop>
                            <NavUl bg={bg}>
                              <NavLi
                                to="/"
                                bgColor={
                                  activeTab === 'Home' ? tabColor : 'none'
                                }
                                onClick={changeHomeTab}
                              >
                                <Icon
                                  iconColor={
                                    activeTab === 'Home' ? '#ff0000' : iconColor
                                  }
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
                                bgColor={
                                  activeTab === 'Trending' ? tabColor : 'none'
                                }
                                onClick={changeTrendTab}
                              >
                                <Icon
                                  iconColor={
                                    activeTab === 'Trending'
                                      ? '#ff0000'
                                      : iconColor
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
                                bgColor={
                                  activeTab === 'Gaming' ? tabColor : 'none'
                                }
                                onClick={changeGameTab}
                              >
                                <Icon
                                  iconColor={
                                    activeTab === 'Gaming'
                                      ? '#ff0000'
                                      : iconColor
                                  }
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
                                bgColor={
                                  activeTab === 'Save' ? tabColor : 'none'
                                }
                                onClick={changeSaveTab}
                              >
                                <Icon
                                  iconColor={
                                    activeTab === 'Save' ? '#ff0000' : iconColor
                                  }
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
                            </NavUl>
                          </MenuPop>
                        </>
                      )}
                    </Popup>
                  </ContainerListItem>
                  <ContainerListItem>
                    <Button IconColor={IconColor} onClick={this.onClickLogout}>
                      <FiLogOut />
                    </Button>
                  </ContainerListItem>
                </ContainerList>
              </SmallDevice>

              <LargeDevice>
                <ContainerList>
                  <ContainerListItem>
                    <Button IconColor={IconColor} onClick={onClickTheme}>
                      {isDark ? <FiSun /> : <FaMoon />}
                    </Button>
                  </ContainerListItem>
                  <ContainerListItem>
                    <Profile
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </ContainerListItem>

                  <ContainerListItem>
                    <Popup
                      modal
                      trigger={
                        <Logout
                          LogColor={LogColor}
                          type="button"
                          onClick={this.onClickLogout}
                        >
                          Logout
                        </Logout>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <ModalContainer>
                          <ModalContent>
                            Are you sure, you want to logout
                          </ModalContent>
                          <ModalRow>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ModalRow>
                        </ModalContainer>
                      )}
                    </Popup>
                  </ContainerListItem>
                </ContainerList>
              </LargeDevice>
            </NavHeader>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default withRouter(Header)
