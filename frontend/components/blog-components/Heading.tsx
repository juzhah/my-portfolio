function Heading({ title }: { title: string }) {
  const index = title.replaceAll(" ", "-").toLowerCase();
  return (
    <h2
      id={index}
      className="relative font-label text-sm uppercase tracking-[0.3em] text-primary-container mb-8 mt-16 scroll-mt-64"
    >
      {title}
    </h2>
  );
}

export default Heading;
