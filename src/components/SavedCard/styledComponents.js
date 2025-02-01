import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li``

export const VideoBg = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-top: 30px;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const ThumbnailImg = styled.img`
  width: 250px;
  height: 23vh;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    width: 270px;
    margin-top: 20px;
    height: 25vh;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 30vh;
    margin-left: 50px;
  }
  @media screen and (min-width: 1006px) {
    width: 440px;
    margin-left: 70px;
  }
`
export const ProfileImg = styled.img`
  width: 25px;
  height: 22px;
  margin: 0px;
  margin-top: 9px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.videoTitle};
  line-height: 1.5;
  margin-bottom: 0px;
  font-weight: 500;

  @media screen and (min-width: 576px) {
    padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 19px;
    font-weight: 700;
  }
`
export const Bottom = styled.div`
  display: flex;
`

export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  padding-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 9px;
  color: #64748b;
  font-weight: 500;
  padding-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding-left: 10px;
  }
`
export const Video = styled.div`
  display: flex;
  width: 250px;
  @media screen and (min-width: 576px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 340px;
  }
  @media screen and (min-width: 1006px) {
    width: 440px;
  }
`
