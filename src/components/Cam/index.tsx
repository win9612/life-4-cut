import React from "react";
import { WrapCam } from "./Cam.styled";

type Props = {
  camRef: any;
};

const Cam = ({ camRef }: Props) => {
  return (
    <WrapCam>
      <video
        autoPlay
        playsInline
        muted
        id="player"
        ref={camRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </WrapCam>
  );
};

export default Cam;
