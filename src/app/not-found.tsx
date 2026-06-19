import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f0] text-dark flex items-center justify-center px-6">
      <div className="max-w-xl text-center flex flex-col items-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-dark/45 mb-6">
          Error 404
        </p>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight font-bold mb-6">
          Page Not Found
        </h1>
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-dark/60 leading-relaxed mb-10">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="border border-dark/20 px-8 py-4 font-sans text-[10px] uppercase tracking-[0.2em] text-dark hover:bg-dark hover:text-light transition-colors font-bold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
