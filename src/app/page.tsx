import FrameNormal from "@/components/Frames/Normal";
import WebcamViewer from "@/components/WebcamViewer";

/**
 * 홈페이지
 */
export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e2e1e0",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>카메라</h1>
      <FrameNormal>
        <WebcamViewer />
      </FrameNormal>
    </main>
  );
}
