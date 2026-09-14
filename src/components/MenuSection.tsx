export function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-[#0D0D0D] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="menu-main-heading"
          className="display-title text-center text-[#F5F0E8]"
        >
          NOTRE <span className="text-[#C1272D]">MENU</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:mt-20 lg:gap-24">
          <article className="flex flex-col items-center">
            <h3 className="font-anton text-3xl tracking-wide text-[#FFA733] sm:text-4xl">
              1. MENU PRINCIPAL
            </h3>
            <div className="mt-8 w-full max-w-4xl overflow-hidden rounded-lg border-2 border-[#C1272D] bg-[#0D0D0D] shadow-lg">
              <img
                src="/assets/images/main%20menu.png"
                alt="Menu principal Hellfire Burger"
                className="block h-auto w-full"
              />
            </div>
          </article>

          <article className="flex flex-col items-center">
            <h3 className="font-anton text-3xl tracking-wide text-[#FFA733] sm:text-4xl">
              2. MENU DES BOISSONS
            </h3>
            <div className="mt-8 w-full max-w-4xl overflow-hidden rounded-lg border-2 border-[#FFA733] bg-[#0D0D0D] shadow-lg">
              <img
                src="/assets/images/drinks%20menu.jpg"
                alt="Menu des boissons Hellfire Burger"
                className="block h-auto w-full"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
