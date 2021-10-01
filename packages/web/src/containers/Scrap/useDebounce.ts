import { useEffect, useRef, useState } from "react";

export default function useDebounce(search) {
  const [filter, setFilter] = useState(search);

  const r = useRef();

  useEffect(() => {
    clearTimeout(r.current);
    r.current = setTimeout(() => setFilter(search.toLowerCase()), 400);
    return () => {
      clearTimeout(r.current);
    };
  }, [search]);

  return [filter];
}
