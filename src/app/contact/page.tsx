import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Awail Al-Naqd",
  },
  description: "Get in touch with Awail Al-Naqd currency exchange in Benghazi, Libya.",
  openGraph: {
    title: "Contact Awail Al-Naqd",
    description: "Get in touch with Awail Al-Naqd currency exchange in Benghazi, Libya.",
    type: "website",
  },
};

const contactDetails = [
  {
    title: "Address",
    value: siteConfig.addressLine,
  },
  {
    title: "Phone",
    value: siteConfig.phone,
  },
  {
    title: "Email",
    value: "info@awail-alnaqd.com",
  },
  {
    title: "Business Hours",
    value: "Sunday - Thursday: 9:00 AM - 4:00 PM | Friday & Saturday: Closed",
  },
];

export default function ContactPage() {
  const mapAddress = encodeURIComponent(siteConfig.addressLine);

  return (
    <main>
      <section className="section-shell">
        <div className="grid items-center gap-8 opacity-0 animate-fadeIn md:grid-cols-2 md:gap-10">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Contact
            </p>
            <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Contact Awail Al-Naqd
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Reach out to our team for currency exchange support, transfer assistance, and
              compliance guidance.
            </p>
          </article>
          <Image
            src="/images/contact-office.svg"
            alt="Awail Al-Naqd customer service office"
            width={800}
            height={600}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="aspect-[4/3] h-auto w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-shell">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Contact Information
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {contactDetails.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-2 break-words leading-relaxed text-gray-700">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
          Find Us on the Map
        </h2>
        <article className="mt-8 overflow-hidden rounded-xl bg-white p-2 shadow-md">
          <iframe
            title={`${siteConfig.addressLine} map`}
            src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[260px] w-full rounded-lg border-0 sm:h-[360px] md:h-[450px]"
          />
        </article>
      </section>
    </main>
  );
}

