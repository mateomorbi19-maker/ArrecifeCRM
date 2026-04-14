export function BrandLogo({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl bg-arblack border border-arborder overflow-hidden shadow-lg shadow-black/40 shrink-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Arrecife Casademar"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
