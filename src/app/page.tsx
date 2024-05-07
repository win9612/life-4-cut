import WebcamViewer from "@/components/WebcamViewer";
import MainPage from "@/components/template/MainPage";
import { APP_VERSION } from "@/constants";

/**
 * 홈페이지
 */
export default function Home() {
  console.log(APP_VERSION);

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
