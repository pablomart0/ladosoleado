// Minimal hand-rolled line icons (no external icon package needed).
function Wrap({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      {children}
    </svg>
  );
}

export const IconUsers = () => (
  <Wrap><path d="M16 11a4 4 0 1 0-4-4" /><path d="M2 20c0-3.3 3.6-5 6-5s6 1.7 6 5" /><path d="M16 20c0-2.5-1-4-2.3-4.7" /><circle cx="8" cy="7" r="4" /></Wrap>
);
export const IconBed = () => (
  <Wrap><path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" /><path d="M2 18h20" /><path d="M4 12V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M10 12V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" /></Wrap>
);
export const IconPool = () => (
  <Wrap><path d="M3 16c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" /><path d="M5 12 8 4l3 8" /><path d="M13 12l3-6 3 6" /></Wrap>
);
export const IconGrill = () => (
  <Wrap><path d="M5 12h14" /><path d="M6 12a6 6 0 0 0 12 0" /><path d="M12 12V4" /><path d="M9 4h6" /><path d="M7 21l1.5-6" /><path d="M17 21l-1.5-6" /></Wrap>
);
export const IconCar = () => (
  <Wrap><path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" /><path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z" /><circle cx="7.5" cy="17.5" r="0.8" /><circle cx="16.5" cy="17.5" r="0.8" /></Wrap>
);
export const IconWifi = () => (
  <Wrap><path d="M2 8.5a16 16 0 0 1 20 0" /><path d="M5.5 12a11 11 0 0 1 13 0" /><path d="M9 15.5a6 6 0 0 1 6 0" /><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" /></Wrap>
);
export const IconHeat = () => (
  <Wrap><path d="M12 3c1 2-1 3-1 5a2 2 0 0 0 4 0c1.5 1.5 2 3.5 2 5a5 5 0 0 1-10 0c0-3 2-4 2-6 0-1.3-.7-2-1-3 1.5 0 3 .5 4-1Z" /></Wrap>
);
export const IconPaw = () => (
  <Wrap><circle cx="7" cy="8" r="1.6" /><circle cx="12" cy="6.2" r="1.6" /><circle cx="17" cy="8" r="1.6" /><path d="M12 12c-3.3 0-6 2-6 4.5 0 1.9 1.7 3 3.3 2.2.8-.4 1.7-.7 2.7-.7s1.9.3 2.7.7c1.6.8 3.3-.3 3.3-2.2 0-2.5-2.7-4.5-6-4.5Z" /></Wrap>
);
export const IconTree = () => (
  <Wrap><path d="M12 22v-7" /><path d="M12 15 7 9h3L7 4h4l1 3 1-3h4l-3 5h3l-5 6Z" /></Wrap>
);
export const IconMap = () => (
  <Wrap><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14" /><path d="M15 6v14" /></Wrap>
);
