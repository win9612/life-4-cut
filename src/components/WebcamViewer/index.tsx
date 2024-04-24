"use client";

import React, { useEffect, useRef, useState } from "react";

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
      <video
        style={{
          marginTop: "16px",
          border: "1px solid #333333",
        }}
        width="640"
        height="480"
        autoPlay
        playsInline
        muted
        id="player"
        ref={webcamRef}
      />
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
