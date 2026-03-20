export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
}

export const posts: BlogPost[] = [
  {
    slug: "baby-growth-timelapse",
    title: "How to Make a Baby Growth Timelapse Video (The Easy Way)",
    description:
      "Learn how to create a stunning baby growth timelapse video — from the viral videos you've seen online to the simplest method that takes just 5 seconds a week.",
    date: "2026-03-18",
    readingTime: "5 min read",
  },
  {
    slug: "baby-memory-apps-compared",
    title: "5 Baby Memory Apps Compared: Which One Is Actually Worth It?",
    description:
      "An honest comparison of the top baby memory and milestone apps — 1 Second Everyday, Growby, FaceLapse, Baby+, and lil leaps — so you can pick the right one.",
    date: "2026-03-15",
    readingTime: "7 min read",
  },
  {
    slug: "why-record-babys-first-year",
    title: "Why You'll Regret Not Recording Your Baby's First Year",
    description:
      "The science of how fast babies change, why photos aren't enough, and the 5-second weekly habit that captures what you'll wish you had later.",
    date: "2026-03-12",
    readingTime: "4 min read",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
