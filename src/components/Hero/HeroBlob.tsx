/** Decorative background blobs and dot-grid pattern — purely presentational. */
export function HeroBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="blob" style={{ top: '-180px', right: '-220px' }} />
      <div
        className="blob hidden md:block"
        style={{ bottom: '-260px', left: '-220px', width: '520px', height: '520px', opacity: 0.35 }}
      />
    </div>
  );
}
