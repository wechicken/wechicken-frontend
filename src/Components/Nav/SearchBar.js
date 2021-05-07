import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { SearchSvg } from '../../Styles/svg'
import { searchAction } from '../../store/actions/searchAction'
import theme, { flexCenter } from '../../Styles/Theme'

function SearchBar() {
  const [isSearchActive, setSearchActive] = useState(false)
  const [keyword, setKeyword] = useState(false)
  const [inputFocus, setInputFocus] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleInput = (e) => {
    e.target.value ? setKeyword(true) : setKeyword(false)
    if (e.keyCode === 13) {
      dispatch(searchAction(e.target.value))
      history.push('/search')
    }
  }
  const handleSearchIcon = () => {
    if (window.innerWidth > 375) {
      !keyword && setSearchActive(!isSearchActive)
    } else {
      history.push('/search')
    }
  }

  return (
    <SearchBarContainer inputFocus={inputFocus}>
      <SearchIcon onClick={handleSearchIcon}>{SearchSvg}</SearchIcon>
      <Input
        inputFocus={inputFocus}
        isSearchActive={isSearchActive}
        onKeyDown={(e) => handleInput(e)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder='블로그 포스팅을 검색하세요'
      />
    </SearchBarContainer>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
  position: relative;
  ${flexCenter}
  padding: 5px 8px;
  border: 1px solid
    ${(props) => (props.inputFocus ? theme.orange : theme.lightGrey)};
  border-radius: 8px;

  @media (max-width: 375px) {
    padding: 0;
    border: none;
  }
`

const Input = styled.input`
  margin-left: 30px;
  height: 25px;
  border: none;
  outline: none;
  font-size: 18px;

  @media (max-width: 375px) {
    display: none;
  }

  ::placeholder {
    padding-left: 5px;
    font-size: 14px;
    color: ${theme.deepGrey};
    opacity: 0.7;
  }
`

const SearchIcon = styled.div`
  ${flexCenter}
  position: absolute;
  left: 0px;
  width: 38px;
  height: 38px;

  svg {
    width: 20px;
    height: 20px;
    fill: ${theme.middleGrey};
    cursor: pointer;
  }

  @media (max-width: 375px) {
    left: -30px;
  }
`
