import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Malangeni Tech Guild handles your personal information under POPIA.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="24 October 2026">
      <section>
        <p>
          {site.legalName} (Reg {site.regNumber}) respects your privacy. This page explains,
          in plain words, what personal information we collect and what we do with it, in line
          with the Protection of Personal Information Act (POPIA).
        </p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>
          Only what you choose to send us: your name, business name, WhatsApp number and what
          you need. The contact form on this site does not store anything — it opens WhatsApp
          with your details typed in, and nothing is sent until you press send.
        </p>
      </section>
      <section>
        <h2>Why we use it</h2>
        <ul>
          <li>To reply to your enquiry and send you a price.</li>
          <li>To deliver and support the work you hire us for.</li>
        </ul>
        <p>We do not sell your information, and we do not add you to marketing lists.</p>
      </section>
      <section>
        <h2>Who sees it</h2>
        <p>
          Only the two of us. Messages pass through WhatsApp, which has its own privacy policy.
          If we build you a site, your hosting and domain providers will hold the details they
          need to run it.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You can ask us what information we hold about you, ask us to correct it, or ask us to
          delete it. Message us on WhatsApp and we will do it. You may also lodge a complaint
          with the Information Regulator of South Africa.
        </p>
      </section>
    </LegalPage>
  );
}
