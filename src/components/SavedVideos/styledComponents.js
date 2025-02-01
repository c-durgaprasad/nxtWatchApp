import styled from 'styled-components'

export const SavedSideBar = styled.div`
  display: flex;
`
export const SavedVideosBg = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const NoVideosBg = styled.div`
  background-color: ${props => props.noVideosBg};
  width: 100%;
  height: 100vh;
`
export const NoVideos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoVideosImage = styled.img`
  width: 290px;
  height: 230px;
  margin-top: 70px;
`

export const VideoHead = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.videoHead};
  padding-top: 35px;
`

export const VideoDes = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.videoDes};
  text-align: center;
`
export const Save = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const IconDiv = styled.div`
  background-color: ${props => props.divColor};
  display: flex;
  padding-left: 20px;
  height: 12vh;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    height: 18vh;
    padding-top: 20px;
  }
`

export const IconBg = styled.div`
  background-color: ${props => props.iconBg};
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
    width: 70px;
    height: 70px;
  }
`
export const IconName = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  font-weight: 700;
  color: ${props => props.iconName};
  padding-left: 13px;
  @media screen and (min-width: 768px) {
    font-size: 29px;
    font-weight: 900;
  }
`
export const SavedListBg = styled.div`
  background-color: ${props => props.savedBgColor};
  height: 100vh;
`
export const UlList = styled.ul`
  list-style-type: none;
  padding: 0px;
`
