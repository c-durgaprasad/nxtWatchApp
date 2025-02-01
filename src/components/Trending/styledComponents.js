import styled from 'styled-components'

export const TrendingContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const Trends = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    margin-left: 60px;
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
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  @media screen and (min-width: 768px) {
    margin-right: 40px;
    margin-top: 200px;
    height: 100vh;
  }
`

export const TrendingBg = styled.div`
  background-color: ${props => props.trendBgColor};
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`
export const UlList = styled.nav`
  padding: 0px;
  list-style-type: none;
`
