import React from "react";
import styled from "styled-components";

const InputTheme = ({
  width,
  type,
  value,
  handleType,
  placeholder,
  size,
  name,
  validationCheck,
}) => {
  return (
    <Container width={width} size={size}>
      <div className="nameBox">
        <div className="type">{type}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => handleType(e.target.value, e.target.name)}
          placeholder={placeholder}
          name={name}
        />
        {validationCheck === false && (
          <Validation>날짜형식을 확인 해 주세요.</Validation>
        )}
      </div>
    </Container>
  );
};

export default React.memo(InputTheme);

const Container = styled.div`
  margin: 5px 0;

  .nameBox {
    padding-left: 12px;
    padding-bottom: 2px;

    .type {
      margin-left: 2px;
      margin-bottom: 6px;
      font-weight: 500;
      font-size: 15px;
      color: #8a8383;
    }

    input {
      width: ${({ width }) => width}px;
      font-size: ${({ size }) => size}px;
      height: ${({ size }) => size + 5}px;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      outline: none;
      cursor: text;
      caret-color: #ff7425;
    }
    input::placeholder {
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

const Validation = styled.div`
  padding: 1px 0px 0px 2px;
  font-size: 8px;
  color: red;
`;
