import { SmoothScrollProvider } from "../src/contexts/SmoothScroll.context";
import Home from "../src/pages/Home.page";

export default function IndexPage() {
  return (
    <SmoothScrollProvider
      options={{
        smooth: true,
      }}
    >
      <Home />
    </SmoothScrollProvider>
  );
}
