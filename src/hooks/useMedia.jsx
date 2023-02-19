import { useState, useEffect } from "react";

function useScreenSize() {
  const [width, setWidth] = useState(window.matchMedia("(min-width:900px)").matches);
  const handleResize = () => {
    if (window.innerWidth > 900) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  };
    useEffect(() => {
      window.addEventListener("resize", handleResize);
         return () => {
           window.removeEventListener("resize", handleResize);
         };
    }, []);
    console.log(width);

  return  width
};

export {useScreenSize};
