import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        if (isCurrent.current) {
          setData(y);
        }
      });
  }, [url, setData]);

  return data;
};
