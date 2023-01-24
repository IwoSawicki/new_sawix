import { animate, easeIn } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <div>
      Footer
      <div className="relative flex overflow-x-hidden ">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 6</span>
          <span className="mx-4 text-4xl">Marquee Item 7</span>
          <span className="mx-4 text-4xl">Marquee Item 8</span>
          <span className="mx-4 text-4xl">Marquee Item 9</span>
          <span className="mx-4 text-4xl">Marquee Item 10</span>
        </div>
      </div>
    </div>
  );
}
