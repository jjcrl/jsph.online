import { SmoothScrollProvider } from "../../src/contexts/SmoothScroll.context";
import NcNews from "../../src/pages/NcNews.page";

export default function AboutPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <NcNews />
    </SmoothScrollProvider>
  );
}
