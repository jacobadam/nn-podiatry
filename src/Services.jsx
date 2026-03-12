import { services } from "../data/services";

export default function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="services-title"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Our Services
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          Professional podiatry services and trusted guidance for a range of
          common foot health concerns.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
          <a
            key={service.slug}
            href={service.href}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md "
            aria-labelledby={`${service.slug}-title`}
            aria-describedby={`${service.slug}-description`}
            aria-label={`Learn more about ${service.title}`}
          >
            <div className="p-3">
              <img
                className="aspect-4/3 w-full rounded-xl object-cover"
                src={service.image}
                alt={service.alt}
              />
            </div>

            <div className="flex flex-1 flex-col px-5 pb-5 pt-1 text-center">
              <h2
                id={`${service.slug}-title`}
                className="text-xl font-semibold text-gray-900"
              >
                {service.title}
              </h2>

              <p
                id={`${service.slug}-description`}
                className="mt-3 flex-1 text-sm leading-7 text-gray-600"
              >
                {service.description}
              </p>

              <span className="mt-6 inline-flex min-h-11 items-center justify-center self-center select-none rounded-lg bg-cyan-600 px-6 py-3 text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40">
                Learn more
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
