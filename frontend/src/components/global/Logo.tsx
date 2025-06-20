import React from "react";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  strokeColor?: string; // Tailwind class or HEX
  strokeWidth?: number;
};

const Logo = ({
  className = "w-20 h-20", // default size
  strokeColor = "#160888", // default stroke color
  strokeWidth = 13,
}: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    className={clsx(className)}
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
  >
    <ellipse
      rx="62.992126"
      ry="65.288714"
      transform="translate(160.443014 145.126593)"
      paintOrder="markers fill stroke"
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
    <g transform="translate(19.922454 -4.873414)">
      <g transform="matrix(.99991 0.013402 -0.014907 1.112183 2.282724 -21.318992)">
        <line
          x1="0"
          y1="-41.994751"
          x2="0"
          y2="41.994751"
          transform="translate(150 152.230972)"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </g>
      <line
        x1="20.193811"
        y1="-20.864268"
        x2="-20.19381"
        y2="20.864268"
        transform="translate(128.330563 129.295732)"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </g>
  </svg>
);

export default Logo;
