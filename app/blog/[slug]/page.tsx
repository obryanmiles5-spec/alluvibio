import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ShoppingBag, ArrowLeft, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogPosts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const title = `${post.title} | UK Peptides Science Hub`;
  const description = post.summary;

  return {
    title,
    description,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `https://buyretat.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://buyretat.co.uk/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: ['UK Peptides Lab Team'],
      tags: post.keywords,
      images: [
        {
          url: 'https://buyretat.co.uk/Home.png',
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "UK Peptides",
      "url": "https://buyretat.co.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UK Peptides",
      "logo": {
        "@type": "ImageObject",
        "url": "https://buyretat.co.uk/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://buyretat.co.uk/blog/${post.slug}`
    },
    "image": "https://buyretat.co.uk/Home.png",
    "keywords": post.keywords.join(', ')
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Controls */}
          <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Hub Directory
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:underline"
            >
              <ShoppingBag className="w-4 h-4" />
              Visit Lab Shop
            </Link>
          </div>

          {/* Reader Body */}
          <article className="p-6 sm:p-10 space-y-6">
            {/* Meta tags */}
            <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-400 font-medium">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wide text-xs">
                {post.category}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Keywords */}
            <div className="flex flex-wrap gap-1.5 border-y border-slate-100 py-3">
              <span className="text-xs text-slate-400 font-semibold self-center mr-1">SEO Keywords:</span>
              {post.keywords.map((kw, i) => (
                <span key={i} className="text-[10px] sm:text-xs bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-lg font-mono">
                  #{kw}
                </span>
              ))}
            </div>

            {/* Content markup */}
            <div className="prose max-w-none prose-slate mt-4">
              {post.content}
            </div>

            {/* Call To Action */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 sm:p-8 mt-10 text-center space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">Need High-Purity Compounds for Your Next Assay?</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                UK Peptides Bio provides certified 99%+ pure Retatrutide, BPC-157, and other premium research compounds to UK laboratories. Every batch is HPLC and Mass Spectrometry verified.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Browse Our Lab Catalog
                  <ShoppingBag className="w-4 h-4" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
