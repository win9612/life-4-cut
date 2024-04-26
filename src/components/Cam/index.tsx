import React from "react";

type Props = {
  camRef: any;
};

const Cam = ({ camRef }: Props) => {
  return <video width="640" height="480" autoPlay playsInline muted id="player" ref={camRef} />;
};

export default Cam;
