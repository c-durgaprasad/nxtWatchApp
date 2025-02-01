import styled from 'styled-components'

export const Player = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.videoTitle};
  line-height: 1.5;
  margin-bottom: 0px;
  font-weight: 500;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 10px;
  }
`

export const Details = styled.div`
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

export const ViewDate = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    padding-top: 10px;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
`
export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
  padding-left: 10px;
`
export const IconsView = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    margin-right: 20px;
  }
`
export const LikeIcon = styled.p`
  margin-top: 0px;
  color: ${props => props.likeColor};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const DisIcon = styled.p`
  margin-top: 0px;
  color: ${props => props.dislikeColor};
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const SaveIcon = styled.p`
  margin-top: 0px;
  color: ${props => props.saveColor};
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const IconDiv = styled.div`
  display: flex;
`

export const LikeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0px;
  margin-bottom: 17px;
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.likeColor};
  font-weight: 500;
  padding: 0px;
  padding-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const DisLikeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.dislikeColor};
  font-weight: 500;
  padding-top: 2px;
  padding-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`

export const SaveButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.saveColor};
  font-weight: 500;
  padding-top: 2px;
  padding-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`

export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 0px;
  margin-top: 9px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.channelName};
`

export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: ${props => props.descriptionText};
  font-weight: 500;
  line-height: 1.5;
  padding-left: 14px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    width: 90%;
    padding-left: 70px;
    line-height: 2;
    padding-top: 10px;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`
export const NameSub = styled.div`
  margin-left: 10px;
`
export const VideoItems = styled.div`
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
  @media screen and (min-width: 1100px) {
    margin-left: 15px;
  }
`
