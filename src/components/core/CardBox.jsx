"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

const CardBox = ({ children, classNames, onClick, id, elementRef }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(e) {
    if (!e.currentTarget) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      id={id}
      onMouseMove={onMouseMove}
      onClick={onClick}
      ref={elementRef}
      className={`relative w-full flex flex-col justify-start items-start duration-500 border rounded-[var(--borderRadius)] hover:bg-zinc-800/10 hover:border-zinc-400/50 border-zinc-600 overflow-hidden group ${classNames}`}
    >
      <div className="pointer-events-none absolute">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};

CardBox.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CardBox;
