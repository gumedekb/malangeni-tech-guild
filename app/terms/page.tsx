import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { site, VAT_NOTE } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms we work on: prices, payment, ownership and care plans.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="24 October 2026">
      <section>
        <p>
          These are the terms {site.legalName} (Reg {site.regNumber}) works on. They are short
          on purpose. If anything here is unclear, ask us before you pay.
        </p>
      </section>
      <section>
        <h2>Prices</h2>
        <p>
          The prices on our website are in South African rand. {VAT_NOTE} Anything marked
          “quoted” or “from” gets a written price before work starts.
        </p>
      </section>
      <section>
        <h2>Payment</h2>
        <p>
          For work over R1,500 you pay a 50% deposit to start and the balance on completion.
          Third-party fees, such as the Google Play developer
          fee, are paid by you.
        </p>
      </section>
      <section>
        <h2>Ownership</h2>
        <p>
          Once you have paid in full, the site or app is yours. We hand over the code and the
          logins.
        </p>
      </section>
      <section>
        <h2>Care plans</h2>
        <p>
          Care plans are optional and billed month to month. Cancel any time — the plan simply
          stops at the end of the month you have paid for. Pay 12 months upfront and you get one
          month free.
        </p>
      </section>
    </LegalPage>
  );
}
