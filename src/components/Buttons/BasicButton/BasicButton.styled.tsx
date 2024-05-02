import styled from "styled-components";

const NORMAL = {
  BG: "#1f4ef5",
  HOVER: "#4880ee",
  ACTIVE: "#83b4f9",
  COLOR: "#fff",
} as const;

const CANCEL = {
  BG: "#e57373", // 진한 빨간색
  HOVER: "#ef9a9a", // 밝은 빨간색
  ACTIVE: "#ffcdd2", // 매우 밝은 빨간색
  COLOR: "#fff", // 흰색
} as const;

export const Wrap = styled.button<{ $width?: string; $height?: string; buttonType: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "52px"};

  background-color: ${({ buttonType }) =>
    buttonType === "normal" ? NORMAL.BG : buttonType === "cancel" ? CANCEL.BG : "transparent"};
  color: ${({ buttonType }) => (buttonType === "normal" ? NORMAL.COLOR : "#fff")};

  &:hover {
    background-color: ${({ buttonType }) =>
      buttonType === "normal" ? NORMAL.HOVER : buttonType === "cancel" ? CANCEL.HOVER : "transparent"};
  }

  &:active {
    outline: none;
    background-color: ${({ buttonType }) =>
      buttonType === "normal" ? NORMAL.ACTIVE : buttonType === "cancel" ? CANCEL.ACTIVE : "transparent"};
  }

  &:focus {
    outline: none;
    /* box-shadow: 0 0 0 2px rgba(0, 85, 184, 0.5); // 포커스 시 외곽선 효과 */
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
