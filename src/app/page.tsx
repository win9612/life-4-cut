import FrameNormal from "@/components/Frames/Normal";
import WebcamViewer from "@/components/WebcamViewer";
import { WrapHome } from "./MainPage.styled";

/**
 * 홈페이지
 */
export default function Home() {
  return (
    <WrapHome>
      <h1
        style={{
          marginBottom: "16px",
        }}
      >
        카메라
      </h1>
      <WebcamViewer />
    </WrapHome>
  );
}
