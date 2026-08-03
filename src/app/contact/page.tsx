import ContactPageContent from "@/components/sections/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Richard Karoki for freelance software consulting, tutoring, or project inquiries.",
};

const contactPage = () => {
  return <ContactPageContent />;
};

export default contactPage;
