export default function Footer() {
  return (
    <footer className="relative py-12 bg-navy-950">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-ice-400/20 to-transparent mb-8" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-600">
          Frozen Assets &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
