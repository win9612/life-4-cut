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
        backgroundColor: "#fff",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "16px",
        }}
      >
        카메라
      </h1>
      <div>
        <WebcamViewer />
      </div>
    </main>
  );
}
