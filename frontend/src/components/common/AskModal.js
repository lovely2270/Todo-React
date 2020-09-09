import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import Button from "./Button";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AskModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  .p {
    display: flex;
  }
`;

const StyledButton = styled.button`
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  color: rgb(85, 130, 255);
  font-weight: bold;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid rgb(85, 130, 255);
  resize: none;
`;

const AskModal = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}) => {
  const [newText, setNewText] = useState();
  if (!visible) return null;
  return (
    <Fullscreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>
          <StyledInput id="newtext" value={newText}></StyledInput>
        </p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton cyan onClick={onConfirm}>
            {confirmText}
          </StyledButton>
        </div>
      </AskModalBlock>
    </Fullscreen>
  );
};

export default AskModal;
