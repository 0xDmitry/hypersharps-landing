type LogoIconProps = {
  className?: string
}

export default function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      width="100%"
      height="100%"
      shapeRendering="geometricPrecision"
      style={{ display: "block" }}
    >
      <g>
        <rect
          width="1200"
          height="1200"
          style={{
            fill: "rgb(214, 214, 214)",
            stroke: "stroke: rgb(214, 214, 214)",
            strokeWidth: "0px",
            vectorEffect: "non-scaling-stroke",
          }}
        ></rect>
        <g
          style={{
            transformOrigin: "50% 50%",
          }}
          transform="matrix(0.258819, 0.965926, -0.965926, 0.258819, 0.000032, 0.000027)"
        >
          <path
            style={{
              stroke: "stroke: rgb(0, 0, 0)",
              strokeWidth: "0px",
              strokeMiterlimit: 40,
              vectorEffect: "non-scaling-stroke",
            }}
            d="M 608.2 161.718 C 614.454 223.208 625.431 331.026 662.569 436.053 C 641.812 437.899 620.917 438.904 600.003 438.904 C 579.131 438.901 558.24 437.875 537.456 435.994 C 574.576 330.986 585.548 223.196 591.805 161.718 L 600 80 Z M 983.5 811.661 L 1050.3 860 L 975.4 826.2 C 918.634 801.013 819.582 756.814 710.546 736.358 C 719.216 717.713 728.665 699.375 738.973 681.525 C 749.651 663.033 761.25 645.064 773.552 627.646 C 845.882 711.923 933.455 775.39 983.5 811.661 Z M 224.567 826.232 L 149.704 859.997 L 216.495 811.661 C 266.544 775.39 354.119 711.923 426.451 627.645 C 438.752 645.064 450.351 663.033 461.029 681.525 L 461.027 681.525 C 471.306 699.326 480.732 717.612 489.382 736.204 C 379.621 756.587 280.895 800.933 224.567 826.232 Z"
          ></path>
          <g
            style={{
              transform: "matrix(-1, 0, 0, -1, 0, 0)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
          >
            <path
              style={{
                stroke: "rgb(0, 0, 0, 0)",
                strokeWidth: "0px",
                strokeMiterlimit: 40,
                vectorEffect: "non-scaling-stroke",
              }}
              d="M 600 340 L 591.805 421.72 C 583.498 503.33 566.885 666.55 491.823 796.54 C 416.761 926.53 283.25 1023.28 216.495 1071.66 L 149.704 1120 L 224.567 1086.23 C 299.397 1052.62 449.053 985.4 600 985.4 C 749.265 985.42 899.817 1052.66 975.4 1086.2 L 1050.3 1120 L 983.5 1071.66 C 916.75 1023.28 783.24 926.53 708.18 796.54 C 633.12 666.55 616.5 503.33 608.2 421.72 Z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}
