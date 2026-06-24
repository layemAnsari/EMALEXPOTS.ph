import logo from './logo.svg';

const BEST_SELLERS = [
  {
    name: 'Hand-Painted Mug',
    note: 'Everyday comfort, artisan finish',
    price: 'From ₹799',
  },
  {
    name: 'Textured Vase',
    note: 'Minimal form with bold texture',
    price: 'From ₹1,499',
  },
  {
    name: 'Serving Bowl',
    note: 'Perfect for gifting & hosting',
    price: 'From ₹1,099',
  },
  {
    name: 'Cozy Tea Set',
    note: 'Small-batch glazed pieces',
    price: 'From ₹2,499',
  },
];

const CATALOG_ITEMS = [
  { title: 'Mugs & Cups', tag: 'Daily', count: '12 styles' },
  { title: 'Vases', tag: 'Home', count: '9 styles' },
  { title: 'Bowls', tag: 'Serving', count: '15 styles' },
  { title: 'Tea Sets', tag: 'Gifts', count: '6 styles' },
  { title: 'Plates', tag: 'Dining', count: '10 styles' },
  { title: 'Small Decor', tag: 'Accent', count: '14 styles' },
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
              <img src={logo} alt="EMALEXPOTS" className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">EMALEXPOTS</div>
              <div className="text-xs text-zinc-600">Hand-made Pottery</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#best" className="text-zinc-700 hover:text-zinc-900">Best Sellers</a>
            <a href="#catalog" className="text-zinc-700 hover:text-zinc-900">Catalog</a>
            <a href="#contact" className="text-zinc-700 hover:text-zinc-900">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow"
            >
              Order / Enquire
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-gradient-to-b from-white via-zinc-50 to-zinc-50" />
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-zinc-200/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-zinc-200/40 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:py-18">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Small-batch • Hand-glazed • Made with care
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Minimalist pottery for modern homes.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700">
                Discover our best sellers—crafted by hand, finished by detail, and designed to feel timeless.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#best"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
                >
                  Explore Best Sellers
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  Browse Catalog
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium text-zinc-600">Finish</div>
                  <div className="mt-1 text-sm font-semibold">Matte & Gloss</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium text-zinc-600">Custom</div>
                  <div className="mt-1 text-sm font-semibold">Gift-ready</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium text-zinc-600">Batch size</div>
                  <div className="mt-1 text-sm font-semibold">Small</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium text-zinc-600">Featured piece</div>
                    <div className="mt-1 text-lg font-semibold">Textured Vase</div>
                    <div className="mt-2 text-sm text-zinc-700">A calm silhouette with tactile character.</div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <span className="text-lg">✦</span>
                  </div>
                </div>

                <div className="mt-5 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-16 w-16 rounded-2xl bg-zinc-900/5 flex items-center justify-center text-zinc-900">
                        <span className="text-xl">🏺</span>
                      </div>
                      <div className="mt-3 text-sm font-semibold">Hand-crafted</div>
                      <div className="mt-1 text-xs text-zinc-600">Photo placeholders (swap with your images)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">Ready to gift</span>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">Glazed finish</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section id="best" className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Best Sellers</h2>
              <p className="mt-2 text-zinc-700">Minimal designs that customers reorder—and gift again.</p>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-xs font-medium text-zinc-600">Tap to enquire</div>
              <div className="mt-1 text-sm font-semibold">We’ll confirm availability</div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_SELLERS.map((item) => (
              <article
                key={item.name}
                className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-zinc-700">{item.note}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <span className="text-lg">✶</span>
                  </div>
                </div>

                <div className="mt-5 h-28 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 flex items-center justify-center">
                  <span className="text-3xl">🏺</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-zinc-900">{item.price}</div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 opacity-80 transition group-hover:opacity-100"
                  >
                    Enquire <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Catalog</h2>
                <p className="mt-2 text-zinc-700">A neat list of categories—minimal cards for fast browsing.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-800">All</button>
                <button className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-800">Gifts</button>
                <button className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-800">Home</button>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CATALOG_ITEMS.map((c) => (
                <article
                  key={c.title}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-zinc-600">{c.tag}</div>
                      <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                    </div>
                    <div className="rounded-2xl bg-white border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-900">
                      {c.count}
                    </div>
                  </div>
                  <div className="mt-4 h-20 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-sm text-zinc-600">
                    Minimal card preview
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs font-medium text-zinc-600">Enquire for this category</div>
                    <a href="#contact" className="text-sm font-semibold text-zinc-900 opacity-80 hover:opacity-100">
                      →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Hand-made</div>
              <p className="mt-2 text-sm text-zinc-700">Every piece is shaped, glazed, and finished with human care.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Timeless forms</div>
              <p className="mt-2 text-sm text-zinc-700">Minimal silhouettes that look good for years.</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Gift-ready</div>
              <p className="mt-2 text-sm text-zinc-700">We’ll help you choose and confirm availability quickly.</p>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                    <img src={logo} alt="EMALEXPOTS" className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-tight">EMALEXPOTS</div>
                    <div className="text-xs text-zinc-600">Hand-made Pottery</div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                  Want a specific piece or a custom gift? Send an enquiry—availability varies by batch.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="#" className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-white">Instagram</a>
                  <a href="#" className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-white">WhatsApp</a>
                  <a href="#" className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-white">Email</a>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                  <div className="text-base font-semibold">Enquiry (quick draft)</div>
                  <p className="mt-2 text-sm text-zinc-700">No backend—use this as a message template.</p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">What do you want?</label>
                      <div className="mt-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800">
                        Best seller / Category: <span className="font-semibold">(choose from above)</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Message</label>
                      <div className="mt-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800">
                        Hi EMALEXPOTS! I’d like to enquire about <span className="font-semibold">(item/category)</span>. Please share availability and price.
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black"
                      >
                        Send enquiry
                      </a>
                      <a
                        href="#best"
                        className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
                      >
                        Back to Best Sellers
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                  <div>© {new Date().getFullYear()} EMALEXPOTS. All rights reserved.</div>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-zinc-700">Privacy</a>
                    <a href="#" className="hover:text-zinc-700">Terms</a>
                    <a href="#" className="hover:text-zinc-700">Support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

