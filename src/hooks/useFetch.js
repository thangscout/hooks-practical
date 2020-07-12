import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setData(y)
      })
  }, [url, setData])

  return data;
}