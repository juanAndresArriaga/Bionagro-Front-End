/** Lightweight inline-SVG product jug used until real packshots exist. */
export default function Jug({ name, sub }: { name: string; sub?: string }) {
  return (
    <div className="jug" role="img" aria-label={name}>
      <svg viewBox="0 0 200 240">
        <rect x="70" y="6" width="60" height="26" rx="6" fill="#123d2d" />
        <path d="M30 70c0-18 14-30 32-30h76c18 0 32 12 32 30v140c0 14-10 24-24 24H54c-14 0-24-10-24-24z" fill="#fff" stroke="#dfe3d4" strokeWidth="2" />
        <path d="M40 150c40-24 80-6 120-26v86c0 10-8 18-18 18H58c-10 0-18-8-18-18z" fill="#477a42" />
        <path d="M150 128c-20 6-34 20-40 40 22-2 36-16 40-40z" fill="#b5d46a" />
        <text x="100" y="96" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="17" fill="#123d2d">Bionagro</text>
        <text x="100" y="122" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize={name.length > 9 ? 17 : 22} fill="#123d2d">{name}</text>
        {sub && <text x="100" y="196" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="11" fill="#fff">{sub}</text>}
      </svg>
    </div>
  );
}
