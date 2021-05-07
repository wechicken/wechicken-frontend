import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import theme from '../../../src/Styles/Theme'

function ModalLayout({ children, setModalOn }) {
  return (
    <Container>
      <FontAwesomeIcon
        onClick={() => setModalOn(false)}
        className='BtnClose'
        icon={faTimes}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export default ModalLayout

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.white};
  box-shadow: -14px -14px 20px rgba(0, 0, 0, 0.02),
    14px 14px 20px rgba(0, 0, 0, 0.05);
  z-index: 11;

  .BtnClose {
    position: absolute;
    right: 0;
    width: 21px;
    height: 21px;
    margin: 15px;
    color: #828282;
    cursor: pointer;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
`

const ContentWrapper = styled.div`
  width: 675px;
  height: 470px;
  display: flex;
  justify-content: center;

  .BtnClose {
    position: absolute;
    right: 0;
    width: 21px;
    height: 21px;
    margin: 15px;
    color: #828282;
    cursor: pointer;
  }

  @media (max-width: 375px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
  }
`
