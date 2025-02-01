import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameImg = styled.img`
  width: 120px;
  @media screen and (min-width: 576px) {
    height: 240px;
    width: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 220px;
    margin-top: 20px;
  }
`
export const GameName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.gameName};
  margin: 0px;
  padding-top: 8px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    padding-bottom: 3px;
  }
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  font-weight: 500;
  color: #64748b;
  padding_top: 5px;
`
export const World = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: #64748b;
  font-weight: 500;
  padding-top: 2px;
`
export const GameContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  @media screen and (min-width: 576px) {
    margin: 5px;
  }
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
