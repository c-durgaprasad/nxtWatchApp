import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  background-color: ${props => props.BgColor};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 12px;
    width: 100%;
  }
`
export const HeaderLogo = styled.img`
  width: 90px;
  height: 22px;
  @media screen and (min-width: 768px) {
    height: 23px;
    width: 100px;
    margin-left: 20px;
    margin-top: 10px;
  }
`
export const ContainerList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  margin-left: 24px;
`
export const SmallDevice = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeDevice = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }
`

export const ContainerListItem = styled.li`
  font-size: 20px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-left: 20px;
  }
`
export const Button = styled.button`
  outline: none;
  border: 0px none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  color: ${props => props.IconColor};
`

export const Profile = styled.img`
  width: 24px;
  margin-top: 8px;
  padding: 0px;
`
export const Logout = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.LogColor};
  border-radius: 2px;
  color: ${props => props.LogColor};
  height: 21px;
  width: 53px;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
`
export const MenuPop = styled.div`
  height: 200px;
`

export const ModalMenu = styled.div`
  width: 100vw;
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ModalContent = styled.p`
  font-family: 'Roboto';
  color: '#181818';
  padding-top: 5px;
`
export const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const CancelButton = styled.button`
  width: 70px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #181818;
  font-family: 'Roboto';
  font-weight: 500;
  margin-right: 20px;
`
export const ConfirmButton = styled.button`
  width: 70px;
  height: 25px;
  background-color: #3b82f6;
  border: 0px;
  font-family: 'Roboto';
  font-weight: 500;
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
