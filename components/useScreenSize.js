import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height };
};

export default useScreenSize;