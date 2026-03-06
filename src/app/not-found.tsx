export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center px-6">
      <section className="glass-panel-strong w-full max-w-xl rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase text-ink-muted">404</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-balance">
          Page not found
        </h1>
        <p className="mt-4 text-base text-ink-muted text-pretty">
          The page you are trying to open does not exist in this build.
        </p>
      </section>
    </main>
  );
}
