import styled from 'styled-components'

export const NotFoundBg = styled.div`
  background-color: ${props => props.notFoundBg};
  height: 100vh;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const NotFoundImg = styled.img`
  width: 280px;
  height: 280px;
`
export const Page = styled.h1`
  font-size: 17px;
  color: ${props => props.page};
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const Des = styled.p`
  font-size: 12px;
  color: #475569;
  font-weight: 400;
  text-align: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const NoFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const SideFound = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
