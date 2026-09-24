import { m } from "framer-motion";

export default function SectionWrapper({ id, children, className = "", delay = 0 }) {
  return (
    <m.section
      id={id}
      className={`max-w-5xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </m.section>
  );
}

export function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-semibold">{children}</h2>
      {subtitle && <p className="mt-3 text-gray-400">{subtitle}</p>}
    </div>
  );
}
