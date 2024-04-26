"use client";

import React, { useEffect, useRef, useState } from "react";
import Cam from "../Cam";
import FrameNormal from "../Frames/Normal";

const WebcamViewer = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const webcamRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = webcamRef.current!;

    if (!playing) {
      player.srcObject = null;
      return;
    }

    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        player.srcObject = stream;
      })
      .catch((e) => {
        console.log("[Log] 웹캠 연결에 실패했습니다.");
        console.error(e);
      });
  }, [playing]);

  const startStream = () => {
    setPlaying(true);
  };

  const endStream = () => {
    setPlaying(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1000px",
          height: "800px",
          boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          backgroundColor: "#fff",
          borderRadius: "32px",
        }}
      >
        <FrameNormal>
          <Cam camRef={webcamRef} />
        </FrameNormal>
      </div>

      <button
        style={{
          width: "50%",
          height: "80px",
          fontSize: "24px",
          fontWeight: "700",
        }}
        onClick={playing ? endStream : startStream}
      >
        {playing ? "종료하기" : "연결하기"}
      </button>
    </div>
  );
};

export default WebcamViewer;
