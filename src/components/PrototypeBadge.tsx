export function PrototypeBadge() {
  return (
    <div
      aria-label="This is a prototype site"
      className="fixed bottom-4 left-4 z-[60] pointer-events-none select-none"
    >
      <div className="bg-yellow-400/95 text-black text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg border border-yellow-600/50">
        ⚠ Prototype · Demo Only
      </div>
    </div>
  );
}

export default PrototypeBadge;
