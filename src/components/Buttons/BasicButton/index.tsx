"use client";

import React from "react";
import { Wrap } from "./BasicButton.styled";

type Props = {
  buttonType?: "normal" | "cancel" | "warning" | string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  $width?: string;
  $height?: string;
};

const BasicButton = ({ buttonType, children, onClick, disabled, $width, $height }: Props) => {
  return (
    <Wrap
      type="button"
      onClick={onClick}
      disabled={disabled}
      $width={$width}
      $height={$height}
      buttonType={buttonType ?? "normal"}
    >
      {children}
    </Wrap>
  );
};

export default BasicButton;
