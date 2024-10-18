import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page Description",
  keywords: ["Contact Page", "Nelson", "Información"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
