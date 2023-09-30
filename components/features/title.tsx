"use client"

import { useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import { useFeatureStore } from "./store";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px"
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state)=> state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "font-heading py-16 text-5xl font-bold transition-colors duration-300",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};
