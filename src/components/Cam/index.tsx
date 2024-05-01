import React from "react";

type Props = {
  camRef: any;
};

const Cam = ({ camRef }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "75%",
      }}
    >
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
    </div>
  );
};

export default Cam;
