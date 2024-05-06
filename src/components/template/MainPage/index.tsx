"use client";

import React, { PropsWithChildren } from "react";
import { Wrap } from "./MainPage.styled";

/**
 * 메인 페이지 템플릿
 */
const MainPage = ({ children }: PropsWithChildren) => {
  return <Wrap>{children}</Wrap>;
};

export default MainPage;
