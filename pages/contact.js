import { SmoothScrollProvider } from "../src/contexts/SmoothScroll.context";
import Contact from "../src/pages/Contact.page";

export default function AboutPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Contact />
    </SmoothScrollProvider>
  );
}
