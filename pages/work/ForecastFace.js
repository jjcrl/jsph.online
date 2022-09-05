import { SmoothScrollProvider } from "../../src/contexts/SmoothScroll.context";
import ForecastFace from "../../src/pages/ForecastFace.page";

export default function page() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <ForecastFace />
    </SmoothScrollProvider>
  );
}
