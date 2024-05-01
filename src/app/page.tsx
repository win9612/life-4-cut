import FrameNormal from "@/components/Frames/Normal";
import WebcamViewer from "@/components/WebcamViewer";

/**
 * 홈페이지
 */
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{
          marginBottom: "16px",
        }}
      >
        카메라
      </h1>
      <WebcamViewer />
    </div>
  );
}
