export function BrandLogo({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl bg-arblack border border-arborder flex items-center justify-center overflow-hidden shadow-lg shadow-black/40 shrink-0"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coralGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF5C5C" />
            <stop offset="55%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#8B1520" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="120" height="120" fill="#0A0A0A" />

        {/* White bold A */}
        <path
          d="M60 18 L26 102 L42 102 L49 83 L71 83 L78 102 L94 102 L60 18 Z M54 68 L60 50 L66 68 Z"
          fill="white"
        />

        {/* Coral branches overlaid */}
        <g
          stroke="url(#coralGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        >
          {/* Left side branches */}
          <path d="M32 95 Q 28 80 34 68 Q 40 58 36 46" />
          <path d="M36 46 Q 42 44 46 38" />
          <path d="M34 68 Q 40 66 44 60" />
          <path d="M34 68 Q 28 64 24 58" />
          <path d="M32 95 Q 22 88 20 76" />
          <path d="M20 76 Q 14 72 12 64" />
          <path d="M40 85 Q 44 78 42 70" />

          {/* Center-left tendrils crossing the A */}
          <path d="M46 38 Q 52 32 50 22" />
          <path d="M50 22 Q 56 20 60 14" />
          <path d="M44 60 Q 52 56 54 48" />

          {/* Right side branches */}
          <path d="M88 95 Q 92 80 86 68 Q 80 58 84 46" />
          <path d="M84 46 Q 78 44 74 38" />
          <path d="M86 68 Q 80 66 76 60" />
          <path d="M86 68 Q 92 64 96 58" />
          <path d="M88 95 Q 98 88 100 76" />
          <path d="M100 76 Q 106 72 108 64" />
          <path d="M80 85 Q 76 78 78 70" />

          {/* Center-right tendrils crossing the A */}
          <path d="M74 38 Q 68 32 70 22" />
          <path d="M70 22 Q 64 20 60 14" />
          <path d="M76 60 Q 68 56 66 48" />
          <path d="M66 48 Q 62 42 60 34" />

          {/* Top crown */}
          <path d="M55 14 Q 60 8 65 14" />
        </g>

        {/* Small coral dots (berries) */}
        <g fill="url(#coralGrad)">
          <circle cx="46" cy="38" r="1.4" />
          <circle cx="50" cy="22" r="1.4" />
          <circle cx="74" cy="38" r="1.4" />
          <circle cx="70" cy="22" r="1.4" />
          <circle cx="44" cy="60" r="1.2" />
          <circle cx="76" cy="60" r="1.2" />
          <circle cx="60" cy="14" r="1.4" />
        </g>
      </svg>
    </div>
  );
}
