import { useEffect, useRef } from "react";
import roomQ from "./assets/img/roomQ.jpg";

export default function Room360Viewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.PANOLENS) return;

    const panorama = new window.PANOLENS.ImagePanorama(roomQ);

    const viewer = new window.PANOLENS.Viewer({
      container: containerRef.current,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: true,
    });

    viewer.add(panorama);

    return () => viewer.dispose();
  }, []);

  return (
    <div className="main">
      <div className="left">
        <h1>Welcome to Quang Room Rent Service</h1>
      </div>

      <div className="right" ref={containerRef} style={{ height: "100vh" }} />
    </div>
  );
}
