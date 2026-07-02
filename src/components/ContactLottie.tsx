"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type LottieAnimation = Parameters<typeof Lottie>[0]["animationData"];

type ContactLottieProps = {
  className?: string;
  animationClassName?: string;
};

export function ContactLottie({
  className = "grid min-h-64 place-items-center",
  animationClassName = "h-64 w-full max-w-md",
}: ContactLottieProps) {
  const [animationData, setAnimationData] = useState<LottieAnimation | null>(null);

  useEffect(() => {
    fetch("/lottie/feather-pen.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) {
    return (
      <div className={className} />
    );
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className={animationClassName}
      />
    </div>
  );
}
