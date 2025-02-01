import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  @media screen and (min-width: 576px) {
    justify-content: left;
    margin-left: 50px;
  }
`

export const SearchContainer = styled.div`
  background-color: ${props => props.searchBg};
  border: 1px solid #0f0f0f;
  width: 220px;
  height: 25px;
  @media screen and (min-width: 576px) {
    width: 300px;
    height: 24px;
  }
`

export const SearchInput = styled.input`
  background-color: ${props => props.searchBg};
  border: 0px none;
  outline: none;
  width: 210px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 12px;
  @media screen and (min-width: 576px) {
    width: 290px;
    font-size: 10px;
  }
`
export const SearchIconContainer = styled.div`
  background-color: ${props => props.iconBg};
  border: 1px solid #0f0f0f;
  border-left: 0px;
  width: 55px;
  height: 25px;
  padding-left: 18px;
  @media screen and (min-width: 576px) {
    height: 24px;
  }
`
export const SearchButton = styled.button`
  font-size: 12px;
  margin-left: 2px;
  background-color: transparent;
  border: none;
  outline: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  @media screen and (min-width: 768px) {
    margin-right: 40px;
    height: 100vh;
  }
`
export const HomeBg = styled.div`
  padding: 0px;
  margin: 0px;
`

export const HomeSideNav = styled.div`
  display: flex;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 125px;
`

export const LogoContent = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 400;
  width: 70%;
`

export const GetButton = styled.button`
  width: 90px;
  height: 28px;
  background-color: transparent;
  border: 1px solid #181818;
  color: #181818;
  font-weight: 700;
  font-size: 10px;
  margin-top: 10px;
`
export const Premium = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 95vw;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideosContainer = styled.div`
  background-color: ${props => props.videoBgColor};
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 84vw;
  }
`
export const VideoPremium = styled.div`
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  margin-right: 35px;
  @media screen and (min-width: 768px) {
    margin-right: 70px;
  }
`
export const LogoCon = styled.div`
  display: flex;
  justify-content: space-between;
`
