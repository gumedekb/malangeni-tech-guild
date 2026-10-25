// Company facts and contact details, in one place.

export type Contact = { name: string; number: string; display: string };

// Two numbers so someone is always available. The first is the default for every WhatsApp button.
export const contacts: Contact[] = [
  { name: "Khumbulani", number: "27727524123", display: "072 752 4123" },
  { name: "Gcina", number: "27781266606", display: "078 126 6606" },
];

export const site = {
  name: "Malangeni Tech Guild",
  legalName: "Malangeni Tech Guild (PTY) LTD",
  url: "https://mtgtech.co.za",
  regNumber: "2026/533862/07",
  town: "Umzinto",
  province: "KwaZulu-Natal",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(
  message = "Hi Malangeni Tech Guild, I'd like to find out more.",
  contact: Contact = contacts[0],
) {
  return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
}

export const VAT_NOTE = "Prices are final — we are not VAT registered.";
