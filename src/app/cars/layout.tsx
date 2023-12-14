import { ReactNode } from "react";

export default function CarsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          maxWidth: "100%",
          height: "50px",
          background: "#999",
        }}
      >
        HEADER
      </div>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "50px",
          height: "100vh",
          maxHeight: "100%",
          background: "#666",
        }}
      >
        NAV
      </div>
      {children}
    </>
  );
}
