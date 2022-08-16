import { Navigation } from "./navigation";
import CustomCursor from "./custom-cursor";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <CustomCursor />
      {children}
    </>
  );
}
