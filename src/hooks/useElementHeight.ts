import { useLayoutEffect, useRef, useState } from 'react';

export const useElementHeight = () => {
  const ref: any = useRef();
  const [elementHeight, setElementHeight] = useState<number>(0);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { height } = entries[0].contentRect;
      setElementHeight(height);
    })
  );

  useLayoutEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);

  return [ref, elementHeight];
};
