import Image from 'next/image';

type Case = {
  before: string;
  after: string;
  title: string;
};

const CASES: Case[] = [
  {
    before: '/images/before-after/case1-before.png',
    after: '/images/before-after/case1-after.png',
    title: 'Full-Arch Implant Rehabilitation',
  },
  {
    before: '/images/before-after/case2-before.png',
    after: '/images/before-after/case2-after.png',
    title: 'Implant-Supported Fixed Teeth',
  },
  {
    before: '/images/before-after/case3-before.png',
    after: '/images/before-after/case3-after.png',
    title: 'Pediatric Tooth Restoration',
  },
];

export default function BeforeAfterSlider() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="transformations">
      <div aria-hidden className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Patient Results
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Real Smiles, <span className="text-gradient-logo">Real Transformations</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Actual before &amp; after results from specialist-led implant dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {CASES.map((c, i) => (
            <div
              key={i}
              className={`bg-white/90 backdrop-blur-sm p-3 rounded-[22px] depth-stack card-3d-tilt border border-white/80 fade-up stagger-${i + 1}`}
            >
              {/* Before / After split */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                {/* AFTER (right half base) */}
                <Image
                  src={c.after}
                  alt={`${c.title} — after`}
                  fill
                  draggable={false}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {/* BEFORE (left half overlay) */}
                <div className="absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                  <Image
                    src={c.before}
                    alt={`${c.title} — before`}
                    fill
                    draggable={false}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                {/* Center divider */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)] z-10" />

                {/* Labels */}
                <span className="absolute top-2.5 left-2.5 z-20 bg-white/95 text-gray-900 text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-md">
                  Before
                </span>
                <span className="absolute top-2.5 right-2.5 z-20 bg-[var(--brand-teal)] text-white text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-md">
                  After
                </span>
              </div>

              {/* Title */}
              <p className="text-center font-bold text-sm md:text-[15px] text-gray-900 mt-3 mb-1 px-1 leading-snug">
                {c.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full depth-stack border border-white/80">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--accent-pink-soft)] to-[var(--brand-teal)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--brand-teal-deep)]">{i}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm font-medium">
              <span className="text-gray-900 font-bold">1,000+</span> Happy Patients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
