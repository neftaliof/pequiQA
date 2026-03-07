"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTABanner({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white/80 mb-8">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button variant="accent" size="lg" asChild>
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  {primaryCTA.text}
                </a>
              </Button>
            )}
            {secondaryCTA && (
              <Button variant="outline" size="lg" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a
                  href={secondaryCTA.href}
                  className="flex items-center gap-2"
                >
                  <Mail size={20} />
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
