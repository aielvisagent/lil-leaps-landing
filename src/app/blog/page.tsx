import type { Metadata } from "next";
import BlogNav from "@/components/BlogNav";
import Footer from "@/components/Footer";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — lil leaps",
  description:
    "Tips, comparisons, and stories about capturing your baby's growth. From timelapse videos to memory apps — everything parents need to know.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — lil leaps",
    description:
      "Tips, comparisons, and stories about capturing your baby's growth.",
    url: "https://lilleaps.com/blog",
    siteName: "lil leaps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — lil leaps",
    description:
      "Tips, comparisons, and stories about capturing your baby's growth.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <>
      <BlogNav />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="font-quicksand text-xs font-bold text-coral uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="font-nunito text-3xl md:text-4xl font-black text-navy mb-4">
            Stories & tips for parents
          </h1>
          <p className="text-text-light text-base max-w-[480px] mb-16 leading-relaxed">
            Everything you need to know about capturing your baby&apos;s growth
            — from timelapse tips to app comparisons.
          </p>

          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-mint-pale rounded-[20px] p-8 border-2 border-transparent hover:border-mint hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs font-semibold text-text-light">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-xs text-text-light">·</span>
                  <span className="text-xs font-semibold text-text-light">
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-nunito text-xl md:text-2xl font-black text-navy mb-2">
                  {post.title}
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  {post.description}
                </p>
                <span className="inline-block mt-4 text-sm font-bold text-coral">
                  Read more &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
