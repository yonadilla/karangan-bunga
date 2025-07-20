import React, { useCallback, useState } from "react";

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export default function LazyLoadImage(props) {
  const { imgSrc, inView } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className="embla__slide">
      <div
        className={`embla__lazy-load`.concat(
          hasLoaded ? "embla__lazy-load--has-loaded" : ""
        )}
      >
        {!hasLoaded && <span className="embla__lazy-load__sppiner"></span>}
        <img
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt="Bunga Karangan"
          data-src={imgSrc}
        />
      </div>
    </div>
  );
}
