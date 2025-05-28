import { useEffect, useState } from "react";

const useAtTop = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isAtTop };
};

export default useAtTop;
