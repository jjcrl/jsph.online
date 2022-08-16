import { SmoothScrollProvider } from "../../src/contexts/SmoothScroll.context";
import Work2 from "../../src/pages/Work1.page";

export default function AboutPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Work2 />
    </SmoothScrollProvider>
  );
}
