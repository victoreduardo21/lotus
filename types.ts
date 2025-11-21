import { LucideIcon } from "lucide-react";

export interface BenefitItem {
  icon: LucideIcon;
  description: string;
  isHighlight?: boolean;
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
  stars: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
