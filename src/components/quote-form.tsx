"use client";

import { FormEvent, useState } from "react";

type QuoteFormValues = {
  name: string;
  email: string;
  phone: string;
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  purpose: string;
  message: string;
};

const initialValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  fromCurrency: "USD",
  toCurrency: "EUR",
  amount: "",
  purpose: "Personal Transfer",
  message: "",
};

const currencyOptions = ["USD", "EUR", "GBP", "CAD", "AED", "INR", "JPY", "AUD"];

const purposeOptions = [
  "Personal Transfer",
  "Medical Transfer",
  "Study Abroad",
  "Tourism",
  "Corporate Transfer",
];

const fieldClassName =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100";

type QuoteFormProps = {
  embedded?: boolean;
};

export function QuoteForm({ embedded = false }: QuoteFormProps) {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedAmount = Number(values.amount);
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setSubmitted(false);
      setError("Please enter a valid amount greater than zero.");
      return;
    }

    setError("");
    setSubmitted(true);
    setValues(initialValues);
  };

  const formClassName = embedded ? "p-5 sm:p-6 md:p-7" : "surface-card p-5 sm:p-6 md:p-8";
  const gridClassName = embedded ? "grid gap-5 sm:grid-cols-2" : "mt-6 grid gap-5 sm:grid-cols-2";
  const actionRowClassName = embedded
    ? "mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
    : "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center";

  return (
    <form onSubmit={onSubmit} className={formClassName}>
      {!embedded ? (
        <>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Get a Quote</h2>
          <p className="mt-2 text-sm text-slate-600">
            Submit your transfer requirement and our team will respond with rates and compliance
            requirements.
          </p>
        </>
      ) : null}

      <div className={gridClassName}>
        <label className="sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            required
            type="text"
            autoComplete="name"
            className={fieldClassName}
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Full name"
          />
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            autoComplete="email"
            className={fieldClassName}
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="you@company.com"
          />
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            required
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            placeholder="+1 000 000 0000"
          />
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">From Currency</span>
          <select
            required
            className={fieldClassName}
            value={values.fromCurrency}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, fromCurrency: event.target.value }))
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">To Currency</span>
          <select
            required
            className={fieldClassName}
            value={values.toCurrency}
            onChange={(event) => setValues((prev) => ({ ...prev, toCurrency: event.target.value }))}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">Amount</span>
          <input
            required
            min="0"
            step="0.01"
            type="number"
            className={fieldClassName}
            value={values.amount}
            onChange={(event) => setValues((prev) => ({ ...prev, amount: event.target.value }))}
            placeholder="0.00"
          />
        </label>

        <label>
          <span className="text-sm font-medium text-slate-700">Purpose</span>
          <select
            required
            className={fieldClassName}
            value={values.purpose}
            onChange={(event) => setValues((prev) => ({ ...prev, purpose: event.target.value }))}
          >
            {purposeOptions.map((purpose) => (
              <option key={purpose} value={purpose}>
                {purpose}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            rows={4}
            className={fieldClassName}
            value={values.message}
            onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Share transfer details, timeline, and beneficiary destination."
          />
        </label>
      </div>

      <div className={actionRowClassName}>
        <button type="submit" className="primary-btn animate-pulse-soft w-full sm:w-auto">
          Submit Quote Request
        </button>
        <p className="text-xs text-slate-500">
          Your details are used only for quote processing and compliance review.
        </p>
      </div>

      {error ? <p className="mt-4 text-sm font-medium text-rose-600">{error}</p> : null}
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-emerald-700">
          Thank you. Your quote request has been captured successfully.
        </p>
      ) : null}
    </form>
  );
}
