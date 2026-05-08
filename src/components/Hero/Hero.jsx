import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <img
        src={heroImage}
        alt="VERA streetwear collection"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex h-full items-end px-8 pb-16">
        <div className="max-w-5xl text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.4em]">
            Spring / Summer 2026
          </p>

          <h1
            className="mb-8 text-7xl uppercase leading-none md:text-9xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for modern street culture.
          </h1>

          <Link
            to="/shop"
            className="inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}