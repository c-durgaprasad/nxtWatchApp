import styled from 'styled-components'

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 80px;
  }
`

export const NoVideosImg = styled.img`
  width: 190px;
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    width: 290px;
    margin-top: 40px;
  }
`
export const NoFound = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  padding-top: 20px;
  color: ${props => props.noFoundText};
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 23px;
    font-weight: 600;
  }
`

export const Des = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  width: 85%;
  color: ${props => props.desColor};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    width: 100%;
  }
`
export const RetryBtn = styled.button`
  border: 0px;
  font-family: 'Roboto';
  background-color: #4f46e5;
  font-size: 10px;
  height: 25px;
  width: 61px;
  border-radius: 2px;
  color: #ffffff;
  margin-top: 15px;
`
