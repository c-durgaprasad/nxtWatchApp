import styled from 'styled-components'

export const VideoBg = styled.div`
  background-color: ${props => props.videoBgColor};
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 80vw;
    height: 100vh;
  }
`
export const VideoBlog = styled.div`
  display: flex;
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
