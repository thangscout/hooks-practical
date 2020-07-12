import { useState, useEffect, useRef } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    }
  }, [])

  useEffect(() => {
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          // if(isCurrent.current) {
            setData(y)
          // }
        }, 2000)
      })
  }, [url, setData])

  return data;
}