const Spinner = () => {
  return (
    <div
      className="w-16 h-16 mt-12 mx-auto rounded-full bg-gradient-to-r from-brand-600 to-transparent animate-spin"
      style={{
        backgroundImage:
          "radial-gradient(farthest-side, var(--color-brand-600) 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, var(--color-brand-600))",
        WebkitMaskImage:
          "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
        animation: "spin 1.5s linear infinite",
      }}
    ></div>
  );
};

export default Spinner;
