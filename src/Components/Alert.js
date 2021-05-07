import React, { useEffect } from 'react'
import styled from 'styled-components'
import theme, { flexCenter } from '../Styles/Theme'

const Alert = ({
  type,
  alertMessage,
  setSelectedMenu,
  selectedMenu,
  setActiveAlert,
  excuteFunction,
  submitBtn,
  closeBtn,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleExecuteFunction = () => {
    excuteFunction()
    type !== 'notice' && setActiveAlert(false)
  }

  return (
    <Wrap>
      <AlertContainer>
        <span className='alertMessage'>{alertMessage}</span>
        <div className='btnContainer'>
          {type !== 'notice' && (
            <>
              <CloseBtn
                onClick={() => {
                  setActiveAlert(false)
                  selectedMenu === '로그아웃' && setSelectedMenu('')
                }}
              >
                {closeBtn}
              </CloseBtn>
              <SubmitBtn onClick={handleExecuteFunction}>{submitBtn}</SubmitBtn>
            </>
          )}
        </div>
      </AlertContainer>
    </Wrap>
  )
}

export default Alert

const Wrap = styled.div`
  height: 100%;
  top: 0;
  right: 0;
  left: 0%;
  position: fixed;
  ${flexCenter};
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`

const AlertContainer = styled.div`
  ${flexCenter};
  width: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border-radius: 15px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  z-index: 10;

  .alertMessage {
    margin: 0 auto;
    width: 100%;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    font-family: ${theme.fontContent};
    color: ${theme.fontColor};
  }

  .btnContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  @media (max-width: 375px) {
    width: 300px;
    padding: 25px;
    align-items: center;

    .alertMessage {
      width: 100%;
      font-size: 16px;
    }
  }
`
const CloseBtn = styled.button`
  ${flexCenter}
  width: 150px;
  height: 40px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${theme.lightGrey};
  color: ${theme.white};
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 375px) {
    width: 100px;
  }
`

const SubmitBtn = styled(CloseBtn)`
  background-color: ${theme.orange};
`
