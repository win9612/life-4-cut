"use client";

import React, { PropsWithChildren } from "react";
import { Wrap } from "./StyledMain.styled";

const StyledMain = ({ children }: PropsWithChildren) => {
  return <Wrap>{children}</Wrap>;
};

export default StyledMain;
