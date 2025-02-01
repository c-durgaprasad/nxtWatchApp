import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  margin-left: 15px;
`

export const LoginCard = styled.div`
  background-color: #ffffff;
  width: 65%;
  height: auto;
  border-radius: 7px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 28%;
  }
`
export const LoginDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-top: 25px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LoginLogo = styled.img`
  width: 150px;
  height: 30px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    height: 35px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2px;
  padding-bottom: 3px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const InputType = styled.input`
  outline: none;
  height: 38px;
  width: 90%;
  font-family: 'Roboto';
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 33px;
    font-size: 11px;
  }
`
export const Checkbox = styled.input`
  margin-left: 15px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 14px;
  }
`
export const Show = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const LoginButton = styled.button`
  width: 88%;
  height: 33px;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: 'Roboto';
  margin-left: 10px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
    border-radius: 6px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-top: 14px;
  padding-bottom: 25px;
  margin: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    padding-top: 0px;
    font-size: 10px;
  }
`
