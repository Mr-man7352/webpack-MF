import React, { useRef, useEffect } from "react";
// Module federation allows us to import the mount function from the marketing app
import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
