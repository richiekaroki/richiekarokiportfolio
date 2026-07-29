import ContactPageContent from "@/components/sections/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const contactPage = () => {
  return <ContactPageContent />;
};

export default contactPage;
