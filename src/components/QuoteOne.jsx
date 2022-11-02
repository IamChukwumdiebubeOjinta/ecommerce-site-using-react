import React from "react";
import { styles, layout } from "../utils/styles";
("../utils/styles");

const QuoteOne = () => {
  return (
    <React.Fragment>
      <section
        className={`${layout.sectionInfo} ${styles.marginX} ${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}
      >
        <h2 className="text-3xl leading-9 font-medium mb-6 tracking-wider">
          <i>Who we are...</i>
        </h2>
        <blockquote className="max-w-[650px] text-xl tracking-wide leading-8 text-justify">
          We are the <b>Curators of modern fashion</b> and the believers of
          simplicity in ties to what we wear. <b>Bube's Store</b> is a
          destination concept store and online haven for style seekers with
          simplistic taste. A fashion selection with a personal touch.
        </blockquote>
      </section>
    </React.Fragment>
  );
};

export default QuoteOne;
