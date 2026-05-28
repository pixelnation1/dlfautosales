type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? "text-primary" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/75" : "text-text-dark/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
