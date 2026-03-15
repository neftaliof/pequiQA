"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, FileSearch, GraduationCap, TrendingUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  index?: number;
}

const iconMap = {
  Settings,
  Users,
  FileSearch,
  GraduationCap,
  TrendingUp,
};

export default function ServiceCard({
  title,
  description,
  iconName,
  href,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Settings;
  return (
    <div>
      <Card className="h-full hover:shadow-lg transition-shadow bg-white border-none">
        <CardHeader className="p-4 sm:p-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
          <p className="text-text/70 mb-4 text-sm sm:text-base">{description}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 font-body font-semibold text-sm py-2.5 px-4 rounded-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: "#F2B705",
              color: "#0B2F1F",
            }}
          >
            Saiba mais
            <span aria-hidden>→</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
