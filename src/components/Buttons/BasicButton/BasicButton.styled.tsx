import styled from "styled-components";

export const Wrap = styled.button<{ $width?: string; $height?: string; buttonType: string }>`
  padding: 10px 20px;
  background-color: #0055b8; // Toss 버튼의 대표적인 파란색을 사용
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "52px"};

  background-color: ${({ buttonType }) => (buttonType === "normal" ? "#1f4ef5" : "transparent")};
  color: ${({ buttonType }) => (buttonType === "normal" ? "#fff" : "#fff")};

  &:hover {
    background-color: #4880ee; // 호버 시 색상 변경
  }

  &:active {
    outline: none;
    background-color: #83b4f9; // 클릭 시 색상 변경
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 85, 184, 0.5); // 포커스 시 외곽선 효과
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
