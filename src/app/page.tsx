import WebcamViewer from "@/components/WebcamViewer";
import MainPage from "@/components/template/MainPage";

/**
 * 홈페이지
 */
export default function Home() {
  return (
    <MainPage>
      <h1
        style={{
          marginBottom: "16px",
        }}
      >
        카메라
      </h1>
      <WebcamViewer />
    </MainPage>
  );
}
