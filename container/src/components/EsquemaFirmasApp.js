import { mount } from "esquemaFirmas/EsquemaFirmasApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    const { onUnmount } = mount(ref.current);

    return () => onUnmount();
  }, []);
  return <div ref={ref} />;
};
