import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideMenu = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`
export const SideBarBg = styled.div`
  width: 200px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const NavUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  padding-top: 20px;
  background-color: ${props => props.bg};
  height: 100%;
`

export const NavLi = styled(Link)`
  background-color: ${props => props.bgColor};
  display: flex;
  height: 40px;
  text-decoration: none;
`

export const Icon = styled.p`
  padding-top: 0px;
  font-size: 13px;
  margin-left: 10px;
  color: ${props => props.iconColor};
`
export const IconName = styled.p`
  padding-left: 20px;
  font-size: 11px;
  padding-top: 3px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-weight: ${props => props.weight};
`
export const ContactUs = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 0px;
`
export const SocialIcons = styled.div`
  display: flex;
`
export const Social = styled.p`
  margin-right: 10px;
  margin-bottom: 5px;
`

export const SmIcon = styled.img`
  width: 22px;
`

export const Des = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-weight: 700;
  font-size: 13px;
  line-height: 1.5;
  width: 60%;
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 180px;
`
