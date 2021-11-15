import { useState, useEffect, useRef } from "react";

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => setEntry(entry),
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (node) observer.current(node);
    return () => {
      observer.current.disconnect();
    };
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};
