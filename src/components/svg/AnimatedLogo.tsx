type AnimatedLogoProps = {
  className?: string
}

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      fill="none"
      role="img"
      aria-label="Animated HyperSharps logo"
      className={className}
      width="100%"
      height="100%"
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <style>{`
          .circle {
            fill: none;
            stroke: #999999;
            stroke-width: 2;
            stroke-linecap: butt;
            stroke-dasharray: 0.5 0.5;
            vector-effect: non-scaling-stroke;
          }

          .triangle {
            fill: #000;
            stroke: #aee63d;
            stroke-width: 2;
            stroke-linecap: butt;
            stroke-linejoin: butt;
            vector-effect: non-scaling-stroke;
          }

          .background {
            fill: #000;
            stroke: #000;
            stroke-width: 2;
          }
        `}</style>
      </defs>
      <circle className="circle" cx="600" cy="600" r="450" pathLength="57">
        <animateTransform
          attributeName="transform"
          type="rotate"
          begin="0.1s"
          from="0 600 600"
          to="360 600 600"
          dur="40s"
          repeatCount="indefinite"
        />
      </circle>
      <circle className="circle" cx="600" cy="600" r="300" pathLength="45">
        <animateTransform
          attributeName="transform"
          type="rotate"
          begin="0.1s"
          from="360 600 600"
          to="0 600 600"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>
      <g
        style={{ transformOrigin: "50% 50%" }}
        transform="matrix(0.258819, 0.965926, -0.965926, 0.258819, -0.000068, -0.000289)"
      >
        <path
          className="triangle"
          d="M 600 80 L 591.805 161.718 C 583.498 243.328 566.885 406.547 491.823 536.536 C 416.761 666.525 283.25 763.283 216.495 811.661 L 149.704 859.997 L 224.567 826.232 C 299.397 792.624 449.053 725.399 600 725.4 C 749.265 725.421 899.817 792.664 975.4 826.2 L 1050.3 860 L 983.5 811.661 C 916.75 763.283 783.24 666.525 708.18 536.536 C 633.12 406.547 616.5 243.328 608.2 161.718 L 600 80"
        >
          <animateTransform
            id="intro"
            attributeName="transform"
            type="rotate"
            begin="0.1s"
            values="360 600 600; 350 600 600"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0 0.58 1"
            dur="1.25s"
            fill="freeze"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="intro.end"
            values="350 600 600; 370 600 600; 350 600 600"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
        <g>
          <g transform="matrix(1.284657, 0, 0, 1.284657, -170.796661, -170.793961)">
            <g
              transform-origin="600.002px 730px"
              transform="matrix(-1, 0, 0, -1, -0.000123, -0.00006)"
            >
              <path
                className="background"
                d="M 600 340 L 591.805 421.72 C 583.498 503.33 566.885 666.55 491.823 796.54 C 416.761 926.53 283.25 1023.28 216.495 1071.66 L 149.704 1120 L 224.567 1086.23 C 299.397 1052.62 449.053 985.4 600 985.4 C 749.265 985.42 899.817 1052.66 975.4 1086.2 L 1050.3 1120 L 983.5 1071.66 C 916.75 1023.28 783.24 926.53 708.18 796.54 C 633.12 666.55 616.5 503.33 608.2 421.72 L 600 340"
              ></path>
            </g>
          </g>
          <animateTransform
            id="intro"
            attributeName="transform"
            type="rotate"
            begin="0.1s"
            values="360 600 600; 370 600 600"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0 0.58 1"
            dur="1.25s"
            fill="freeze"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="intro.end"
            values="370 600 600; 350 600 600; 370 600 600"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>
        <g
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          transform="matrix(-1, 0, 0, -1, 0.000021, 0.00004)"
        >
          <path
            className="triangle"
            d="M 600 340 L 591.805 421.72 C 583.498 503.33 566.885 666.55 491.823 796.54 C 416.761 926.53 283.25 1023.28 216.495 1071.66 L 149.704 1120 L 224.567 1086.23 C 299.397 1052.62 449.053 985.4 600 985.4 C 749.265 985.42 899.817 1052.66 975.4 1086.2 L 1050.3 1120 L 983.5 1071.66 C 916.75 1023.28 783.24 926.53 708.18 796.54 C 633.12 666.55 616.5 503.33 608.2 421.72 L 600 340"
          >
            <animateTransform
              id="intro"
              attributeName="transform"
              type="rotate"
              begin="0.1s"
              values="360 600 600; 370 600 600"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0 0 0.58 1"
              dur="1.25s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              begin="intro.end"
              values="370 600 600; 350 600 600; 370 600 600"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
