import ContactForm from "@/components/ContactForm";
import PulseWaveBackground from "@/components/PulseWaveBackground";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
import { cn } from "@/lib/utils";

const contactPage = () => {
  const methods = [
    {
      label: "Email",
      value: "karokirichard522@gmail.com",
      href: "mailto:karokirichard522@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      label: "Phone",
      value: "+254 748 754 251",
      href: "tel:+254748754251",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      value: "richiekaroki",
      href: "https://github.com/richiekaroki",
      icon: <SiGithub className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <PulseWaveBackground />
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-5xl sm:text-6xl max-sm:text-3xl leading-tight [text-wrap:balance]">
          Get In Touch
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <div className="w-full flex flex-col lg:flex-row gap-8">
        <FramerWrapper y={50} delay={0.1} className="w-full lg:w-1/2">
          <ContactForm />
        </FramerWrapper>

        <FramerWrapper y={50} delay={0.2} className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Prefer a direct conversation? Reach me through any of these channels.
            </p>
            <div className="flex flex-col gap-4">
              {methods.map((method) => (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "justify-start gap-3 h-auto py-3 px-4"
                  )}
                >
                  <span className="text-primary-sky">{method.icon}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{method.label}</span>
                    <span className="text-sm font-medium text-foreground">{method.value}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default contactPage;
