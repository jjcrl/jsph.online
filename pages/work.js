import { SmoothScrollProvider } from "../src/contexts/SmoothScroll.context";
import Work from "../src/pages/Work.page";

export default function AboutPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Work />
    </SmoothScrollProvider>
  );
}
