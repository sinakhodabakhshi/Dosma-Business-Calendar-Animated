import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return { data, done };
}
