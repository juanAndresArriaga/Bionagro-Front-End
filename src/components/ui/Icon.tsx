const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  drop: "M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  factory: "M3 20V10l5 3v-3l5 3V6h3v7h5v7zM8 20v-4m5 4v-4m5 4v-4",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 15h8",
  coins: "M4 7c0-1.5 3.6-3 8-3s8 1.5 8 3-3.6 3-8 3-8-1.5-8-3zM4 7v5c0 1.5 3.6 3 8 3s8-1.5 8-3V7M4 12v5c0 1.5 3.6 3 8 3s8-1.5 8-3v-5",
  compass: "M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5z",
  headset: "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1zM20 14h-3v5h2a1 1 0 001-1zM17 19c0 1.5-2 2-5 2",
  leaf: "M5 19C4 10 9 4 20 4c0 11-5 16-13 15M5 19c3-5 6-8 10-10",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  play: "M8 5v14l11-7z",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  chat: "M4 5h16v11H9l-5 4zM8 10h8",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  chev: "M6 9l6 6 6-6",
  info: "M12 8v.01M11 12h1v5h1M3 12a9 9 0 1018 0 9 9 0 10-18 0",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  pin: "M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5L16 9.5",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={`ico ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
