"use client";

import React, { PropsWithChildren } from "react";
import { Wrap } from "./Normal.styled";

const FrameNormal = ({ children }: PropsWithChildren) => {
  return <Wrap>{children}</Wrap>;
};

export default FrameNormal;
