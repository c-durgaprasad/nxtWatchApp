import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Video = styled(Link)`
  text-decoration: none;
`

export const VideoBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  @media screen and (min-width: 576px) {
    height: 50vh;
  }
`

export const ThumbnailImg = styled.img`
  width: 90%;
  height: 23vh;
  margin-top: 10px;
  @media screen and (min-width: 576px) {
    width: 96%;
    margin-top: 20px;
  }
`
export const ThumbnailDetails = styled.div`
  display: flex;
  margin-top: 5px;
  width: 300px;
  margin-left: 15px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
`

export const VideoDetail = styled.div`
  margin-top: 0px;
  display: flex;
`
export const ProfileImg = styled.img`
  width: 25px;
  height: 22px;
  margin: 0px;
  margin-top: 9px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: ${props => props.videoTitle};
  line-height: 1.5;
  margin-bottom: 0px;
  font-weight: 400;
  @media screen and (min-width: 576px) {
  }
`
export const VideoDesc = styled.div`
  padding-left: 5px;
`

export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  margin: 0px;
  padding-top: 8px;
  @media screen and (min-width: 576px) {
    font-size: 10px;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  padding-left: 5px;
`
export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  padding-left: 5px;
`
