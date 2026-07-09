'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Search, 
  ArrowRight, 
  Tag, 
  ChevronRight, 
  TrendingUp, 
  Sparkles, 
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogPosts';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', 'Metabolic', 'Tissue Repair', 'Longevity', 'Guides', 'Quality'];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Blog Container */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              UK Peptides Science Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              UK Peptide & Retatrutide Research Blog
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              SEO & AI-optimized scientific insights, HPLC verification analyses, and procedural guides written for laboratory researchers and procurement officers.
            </p>
          </div>

          {/* Featured Post Banner */}
          {featuredPost && !searchTerm && selectedCategory === 'All' && (
            <div className="bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Featured Research
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-blue-300 font-medium">
                    <span>{featuredPost.category}</span>
                    <span>&bull;</span>
                    <span>{featuredPost.date}</span>
                    <span>&bull;</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredPost.summary}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredPost.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 px-2 py-0.5 rounded-md font-mono">
                      #{kw}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Read Research Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Controls */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search keywords (e.g. Retatrutide, BPC-157, HPLC)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500 text-slate-800"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl">
              <FileText className="w-12 h-12 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-bold text-slate-500">No blog posts found</p>
              <p className="text-xs text-slate-400 mt-1">Try resetting your filters or adjusting your search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5 space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1 font-bold text-blue-600 uppercase tracking-wide">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h3 
                        className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug text-base cursor-pointer"
                      >
                        {post.title}
                      </h3>
                    </Link>

                    {/* Summary */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                    <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                    >
                      Read Article
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
