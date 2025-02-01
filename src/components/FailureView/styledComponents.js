import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  text-align: center;
  height: 90vh;
`

export const FailureImg = styled.img`
  width: 140px;
  @media screen and (min-width: 768px) {
    width: 260px;
  }
`

export const Oops = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.oopsColor};
  font-weight: 600;
  padding-top: 10px;
`

export const TryAgain = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #616e7c;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
  width: 75%;
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
