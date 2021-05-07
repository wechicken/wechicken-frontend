import React from 'react'
import styled from 'styled-components'
import theme, { flexCenter } from '../../../src/Styles/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import GoogleLogin from './GoogleLogin'
import ModalLayout from './ModalLayout'
import LogoBox from './LogoBox'

const LoginModal = ({
  setModalOn,
  setExistingUser,
  handleGoogleInput,
  setLoginSuccess,
}) => {
  return (
    <ModalLayout setModalOn={setModalOn}>
      <LogoBox />
      <ContentsBox>
        <Greeting>
          <div className='greeting'>환영합니다!</div>
          <div className='type'>로그인</div>
        </Greeting>
        <GoogleLogin
          setLoginSuccess={setLoginSuccess}
          setModalOn={setModalOn}
          setExistingUser={setExistingUser}
          handleGoogleInput={handleGoogleInput}
        />
      </ContentsBox>
    </ModalLayout>
  )
}

export default LoginModal

const ContentsBox = styled.div`
  width: 50%;
  padding: 20px 50px 20px 20px;

  @media (max-width: 375px) {
    width: 70%;
    padding: 0;
    ${flexCenter}
    flex-direction:column;
  }
`

const Greeting = styled.div`
  .greeting {
    margin-top: 125px;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #525151;
  }

  .type {
    margin-top: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  @media (max-width: 375px) {
    text-align: center;
    .greeting {
      margin-top: 40px;
    }
    .type {
      font-size: 20px;
    }
  }
`
