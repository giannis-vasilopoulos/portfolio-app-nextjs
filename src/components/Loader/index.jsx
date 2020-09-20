import { useState, useEffect } from "react";
import { LoaderContainer, DualRing } from "./loader.styles";

function Loader() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(loader);
  }, []);

  return (
    <LoaderContainer loaded={isLoaded ? 1 : 0}>
      <DualRing loaded={isLoaded ? 1 : 0}>GV</DualRing>
    </LoaderContainer>
  );
}

export default Loader;
