import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { DotButton, useDotButton } from "./emblaCarouselDotButton";
import usePrevNextButton, {
  NextButton,
  PrevButton,
} from "./emblaCarouselArrowButton";
import LazyLoadImage from "./emblaCarouselLazyImage";
import { AnimatePresence, motion } from "motion/react";

export default function EmblaCarousel(props) {
  const { slides, options, products } = props;
  const [emblaRed, emblaApi] = useEmblaCarousel(options);
  const [slideInView, setSlideInView] = useState([]);
  const [modal, setModal] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButton(emblaApi);

  const updateSlidesInView = useCallback((emblaApi) => {
    setSlideInView((slideInView) => {
      if (slideInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slideInView.includes(index));
      return slideInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  console.log(modal);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          {!modal ? (
            slides.map((slide, index) => (
                <LazyLoadImage
                  key={index}
                  index={index}
                  imgSrc={products.img[index]}
                  inView={slideInView.indexOf(index) > -1}
                />
            ))
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key="modal"
                className="modal-dialog"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "fixed",
                  zIndex: 9999,
                  width: "100vw",
                  height: "100vh",
                  top: 0,
                  left: 0,
                }}
              >
                <div>
                  <img src={products.img[selectedIndex]} alt="modal" />
                </div>
              </motion.div>
              )
            </AnimatePresence>
          )}
        </div>
      </div>

      <div className="embla__dots-container">
        <div className="embla__dots">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className="embla__dots-circle">
          {scrollSnaps.map((_, index) => {
            const isSelected = index === selectedIndex;
            return (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              >
                {isSelected && (
                  <motion.div layoutId="underline" className="dot-underline" />
                )}
              </DotButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
