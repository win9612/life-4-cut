"use client";

import React, { useEffect, useRef, useState } from "react";
import Cam from "../Cam";
import FrameNormal from "../Frames/Normal";
import BasicButton from "../common/Buttons/BasicButton";
import { Wrap, WrapCamArea } from "./WebcamViewer.styled";
import Image from "next/image";

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
      .then((stream: MediaStream) => {
        player.srcObject = stream;
      })
      .catch((e: any) => {
        setPlaying(false);
        console.log("[Log] 웹캠 연결에 실패했습니다.");
        console.error(e);
        alert("웹캠 연결에 실패했습니다.");
      });
  }, [playing]);

  const startStream = () => {
    setPlaying(true);
  };

  const endStream = () => {
    setPlaying(false);
  };

  return (
    <Wrap>
      {/* 카메라 */}
      <WrapCamArea>
        <FrameNormal>
          {playing && (
            <Image
              src="/png/hanwha_logo.png"
              alt=""
              width={64}
              height={64}
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
              }}
            />
          )}
          <Cam camRef={webcamRef} />
        </FrameNormal>
      </WrapCamArea>
      {/* 버튼 */}
      <BasicButton buttonType={playing ? "cancel" : "normal"} onClick={playing ? endStream : startStream}>
        {playing ? "종료하기" : "연결하기"}
      </BasicButton>
    </Wrap>
  );
};

export default WebcamViewer;
