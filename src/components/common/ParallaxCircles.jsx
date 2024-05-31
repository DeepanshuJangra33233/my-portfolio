"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import "../../../public/assets/css/style.css";

const ParallaxCircles = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [glassX, setGlassX] = useState(100);
  const [glassY, setGlassY] = useState(100);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setMouseX(x);
    setMouseY(y);

    if (leftEyeRef.current && rightEyeRef.current) {
      const eyeMovementX = x * 0.005;
      const eyeMovementY = y * 0.005;

      leftEyeRef.current.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;
      rightEyeRef.current.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;
    }
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX - glassX);
    setDragStartY(e.clientY - glassY);

    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", stopDrag);
  };

  const dragging = useCallback(
    (e) => {
      if (!isDragging) return;
      setGlassX(e.clientX - dragStartX);
      setGlassY(e.clientY - dragStartY);
    },
    [isDragging, dragStartX, dragStartY]
  );

  const stopDrag = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", dragging);
    document.removeEventListener("mouseup", stopDrag);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging]);

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center custom-cursor-container"
        onMouseMove={handleMouseMove}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="emojione:dog-face">
            <path
              id="Vector"
              d="M15.8 52.0996C9 47.6996 6.3 30.5996 8.5 22.8996C10.1 17.0996 16.3 8.59961 21.9 6.39961C26.6 4.49961 37.4 4.49961 42 6.39961C47.6 8.59961 53.8 17.0996 55.4 22.8996C57.6 30.6996 55.9 47.6996 49.2 52.0996C35 61.2996 30 61.2996 15.8 52.0996Z"
              fill="#F5D1AC"
            />
            <path
              id="Vector_2"
              d="M5.1 24.7C8.7 32.6 9.6 32.9 13 23.5C14.8 18.5 13.5 15.5 15.7 12.3C16.9 10.5 19.6 7.5 19.6 7.5C19.6 7.5 -1.7 9.7 5.1 24.7Z"
              fill="#423223"
            />
            <path
              id="Vector_3"
              d="M14.2 7.20014C8.79998 10.7001 -2.70002 9.30014 4.09998 24.2001C7.69998 32.1001 8.59998 32.4001 12 23.0001C13.8 18.0001 12.5 15.0001 14.7 11.8001C15.9 10.0001 19.6 7.50014 19.6 7.50014C19.6 7.50014 17.9 4.80014 14.2 7.20014Z"
              fill="#947151"
            />
            <path
              id="Vector_4"
              d="M58.9 24.6004C55.3 32.5004 54.4 32.8004 51 23.4004C49.2 18.4004 50.5 15.4004 48.3 12.2004C47.1 10.4004 44.4 7.40039 44.4 7.40039C44.4 7.40039 65.7 9.70039 58.9 24.6004Z"
              fill="#423223"
            />
            <path
              id="Vector_5"
              d="M49.8 7.20014C55.2 10.7001 66.7 9.30014 59.9 24.2001C56.3 32.1001 55.4 32.4001 52 23.0001C50.2 18.0001 51.5 15.0001 49.3 11.8001C48.1 10.0001 44.4 7.50014 44.4 7.50014C44.4 7.50014 46.1 4.80014 49.8 7.20014Z"
              fill="#947151"
            />
            <path
              id="Vector_6"
              d="M17.7 36.7002C21.0137 36.7002 23.7 34.0139 23.7 30.7002C23.7 27.3865 21.0137 24.7002 17.7 24.7002C14.3862 24.7002 11.7 27.3865 11.7 30.7002C11.7 34.0139 14.3862 36.7002 17.7 36.7002Z"
              fill="white"
            />
            <path
              id="left-eye"
              ref={leftEyeRef}
              d="M18 33C19.6569 33 21 31.6569 21 30C21 28.3431 19.6569 27 18 27C16.3431 27 15 28.3431 15 30C15 31.6569 16.3431 33 18 33Z"
              fill="#3E4347"
            />
            <path
              id="Vector_7"
              d="M46.3 36.7002C49.6138 36.7002 52.3 34.0139 52.3 30.7002C52.3 27.3865 49.6138 24.7002 46.3 24.7002C42.9863 24.7002 40.3 27.3865 40.3 30.7002C40.3 34.0139 42.9863 36.7002 46.3 36.7002Z"
              fill="white"
            />
            <path
              id="right-eye"
              ref={rightEyeRef}
              d="M47 33C48.6569 33 50 31.6569 50 30C50 28.3431 48.6569 27 47 27C45.3431 27 44 28.3431 44 30C44 31.6569 45.3431 33 47 33Z"
              fill="#3E4347"
            />
            <path
              id="Vector_8"
              d="M21.7 48.7998L26.2999 53.6998C29.0999 56.5998 34.7999 56.5998 37.5999 53.6998L42.2999 48.7998L37.5 43.7998H26.5L21.7 48.7998Z"
              fill="#7D644B"
            />
            <path
              id="Vector_9"
              d="M32 39.5996C32 39.5996 27.1 46.5996 27.7 49.8996C28.5 54.6996 35.4 54.6996 36.3 49.8996C36.9 46.5996 32 39.5996 32 39.5996Z"
              fill="#F15A61"
            />
            <path
              id="Vector_10"
              d="M32 51.7L33.1 45H30.9L32 51.7Z"
              fill="#BA454B"
            />
            <path id="Vector_11" d="M27 41.5H37V46.1H27V41.5Z" fill="#423223" />
            <path
              id="Vector_12"
              d="M47.7999 42.5996L40.7 35.0996C36.4 30.5996 27.5999 30.5996 23.2999 35.0996L16.2 42.5996C14.2 44.6996 14.2 48.1996 16.2 50.2996C18.2 52.3996 21.5 52.3996 23.5 50.2996L30.6 42.7996C31.3 42.0996 32.5999 42.0996 33.2999 42.7996L40.4 50.2996C42.4 52.3996 45.7 52.3996 47.7 50.2996C49.9 48.1996 49.8999 44.6996 47.7999 42.5996Z"
              fill="#947151"
            />
            <path
              id="Vector_13"
              d="M26.1 35.6996C26.1 33.0996 28.7 32.5996 32 32.5996C35.3 32.5996 37.9 33.0996 37.9 35.6996C37.9 37.7996 33.2 39.5996 32 39.5996C30.8 39.5996 26.1 37.6996 26.1 35.6996ZM23.31 39.0116L24.299 38.0196L25.29 39.0086L24.301 39.9996L23.31 39.0116ZM20.947 41.8106L21.936 40.8196L22.926 41.8086L21.938 42.7986L20.947 41.8106ZM24.125 42.7626L25.114 41.7716L26.105 42.7596L25.117 43.7516L24.125 42.7626ZM38.703 38.9876L39.695 37.9996L40.683 38.9906L39.692 39.9796L38.703 38.9876ZM41.128 41.7616L42.12 40.7726L43.108 41.7636L42.117 42.7526L41.128 41.7616ZM37.947 42.8106L38.938 41.8226L39.927 42.8126L38.936 43.8026L37.947 42.8106Z"
              fill="#3E4347"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default ParallaxCircles;
