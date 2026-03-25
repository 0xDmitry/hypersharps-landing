import { memo, type CSSProperties, type ReactNode } from "react"

type AnimatedLogoProps = {
  className?: string
}

const BOTTOM_PATH =
  "M 600 80 L 591.805 161.718 C 583.498 243.328 566.885 406.547 491.823 536.536 C 416.761 666.525 283.25 763.283 216.495 811.661 L 149.704 859.997 L 224.567 826.232 C 299.397 792.624 449.053 725.399 600 725.4 C 749.265 725.421 899.817 792.664 975.4 826.2 L 1050.3 860 L 983.5 811.661 C 916.75 763.283 783.24 666.525 708.18 536.536 C 633.12 406.547 616.5 243.328 608.2 161.718 Z"

const MIDDLE_PATH =
  "M 739.16 681.526 C 772.026 624.607 813.616 572.649 857.559 526.422 L 792.549 414.016 C 730.805 428.9 665.399 438.896 600.185 438.903 C 534.356 438.903 468.718 428.952 406.967 414.117 L 342.441 526.033 C 386.523 572.358 428.255 624.448 461.215 681.527 C 493.812 737.977 517.828 799.306 535.753 859.813 L 664.64 859.75 C 682.563 799.262 706.575 737.956 739.16 681.525 L 739.16 681.526 Z"

const TOP_PATH =
  "M 600 1120 L 591.805 1038.28 C 583.498 956.67 566.885 793.45 491.823 663.46 C 416.761 533.47 283.25 436.717 216.495 388.339 L 149.704 340.003 L 224.567 373.768 C 299.397 407.376 449.053 474.601 600 474.6 C 749.265 474.579 899.817 407.336 975.4 373.8 L 1050.3 340 L 983.5 388.339 C 916.75 436.717 783.24 533.47 708.18 663.46 C 633.12 793.45 616.5 956.67 608.2 1038.28 L 600 1120 Z"

const styles = {
  glowOuter: {
    fill: "none",
    stroke: "#aee63d",
    strokeWidth: 16.8,
    opacity: 0.055,
    strokeLinecap: "butt" as const,
    strokeLinejoin: "miter" as const,
    strokeMiterlimit: 40,
  },
  glowInner: {
    fill: "none",
    stroke: "#bdf34f",
    strokeWidth: 11.8,
    opacity: 0.13,
    strokeLinecap: "butt" as const,
    strokeLinejoin: "miter" as const,
    strokeMiterlimit: 40,
  },
  glowCore: {
    stroke: "#d2ff68",
    strokeWidth: 9.4,
    strokeLinecap: "butt" as const,
    strokeLinejoin: "miter" as const,
    strokeMiterlimit: 40,
  },
  clipMask: {
    strokeWidth: 9.4,
    opacity: 1,
    strokeLinecap: "butt" as const,
    strokeLinejoin: "miter" as const,
    strokeMiterlimit: 40,
  },
} as const

type GlowingShapeProps = {
  d: string
  fill: string
  children?: ReactNode
  transform?: string
  style?: CSSProperties
  mask?: string
}

const GlowingShape = memo(function GlowingShape({
  d,
  fill,
  children,
  transform,
  style,
}: GlowingShapeProps) {
  return (
    <g transform={transform} style={style}>
      <path d={d} style={styles.glowOuter} />
      <path d={d} style={styles.glowInner} />
      <path d={d} style={{ ...styles.glowCore, fill }} />
      {children}
    </g>
  )
})

type MaskShapeProps = {
  d: string
  fill: string
  stroke: string
  children?: ReactNode
  transform?: string
  style?: CSSProperties
}

const MaskShape = memo(function MaskShape({
  d,
  fill,
  stroke,
  children,
  transform,
  style,
}: MaskShapeProps) {
  return (
    <path d={d} transform={transform} style={{ ...style, fill, stroke }}>
      {children}
    </path>
  )
})

const AnimatedLogo = memo(function AnimatedLogo({
  className,
}: AnimatedLogoProps) {
  const bottomMaskId = "bottomMask"
  const middleMaskId = "middleMask"
  const bottomIntroId = "bottomIntro"
  const middleIntroId = "middleIntro"
  const topIntroId = "topIntro"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      fill="none"
      className={className}
      role="img"
      aria-label="Animated HyperSharps logo"
      width="100%"
      height="100%"
      focusable="false"
      pointerEvents="none"
      shapeRendering="geometricPrecision"
      style={{ display: "block" }}
    >
      <defs>
        <mask
          id={bottomMaskId}
          x="0"
          y="0"
          width="1200"
          height="1200"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="1200" height="1200" fill="#fff" />
          <MaskShape
            fill="#000"
            stroke="#fff"
            d={MIDDLE_PATH}
            style={{ ...styles.clipMask, strokeWidth: 0 }}
          ></MaskShape>
        </mask>

        <mask
          id={middleMaskId}
          x="0"
          y="0"
          width="1200"
          height="1200"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <MaskShape
            fill="#fff"
            stroke="#fff"
            d={TOP_PATH}
            style={styles.clipMask}
            transform="rotate(60 600 600)"
            transformOrigin="center"
            transformBox="fill-box"
          />
        </mask>
      </defs>

      <g transform="rotate(75 600 600)">
        <g mask={`url(#${bottomMaskId})`}>
          <g>
            <GlowingShape d={BOTTOM_PATH} fill="#000" />
            <animateTransform
              id={bottomIntroId}
              attributeName="transform"
              type="rotate"
              begin="0.1s"
              values="360 600 600; 357 600 600"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0 0 0.58 1"
              dur="1.25s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              begin={`${bottomIntroId}.end`}
              values="357 600 600; 363 600 600; 357 600 600"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              dur="5s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        <g mask={`url(#${middleMaskId})`}>
          <GlowingShape d={MIDDLE_PATH} fill="none" />
          <animateTransform
            id={middleIntroId}
            attributeName="transform"
            type="rotate"
            begin="0.1s"
            values="360 600 600; 357 600 600"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0 0.58 1"
            dur="1.25s"
            fill="freeze"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin={`${middleIntroId}.end`}
            values="357 600 600; 363 600 600; 357 600 600"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>

        <GlowingShape d={TOP_PATH} fill="#000">
          <animateTransform
            id={topIntroId}
            attributeName="transform"
            type="rotate"
            begin="0.1s"
            values="360 600 600; 363 600 600"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0 0.58 1"
            dur="1.25s"
            fill="freeze"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin={`${topIntroId}.end`}
            values="363 600 600; 357 600 600; 363 600 600"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            dur="5s"
            repeatCount="indefinite"
          />
        </GlowingShape>
      </g>
    </svg>
  )
})

export default AnimatedLogo
