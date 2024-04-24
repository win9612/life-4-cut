import WebcamViewer from "@/components/WebcamViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>카메라</h1>
      <div>
        <WebcamViewer />
      </div>
    </main>
  );
}
