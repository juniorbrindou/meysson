interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? "text-accent bg-white/15"
              : "text-primary bg-primary/10"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/75" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
