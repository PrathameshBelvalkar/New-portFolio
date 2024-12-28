import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
const blogData = [
    {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "Forget ChatGPT & Claude: Here Are 6 (New & Free) AI Tools That Will Blow Your Mind",
        description: "Let’s be real — most people using AI are stuck in 2023.They think ChatGPT and Claude are the peak of innovation. Sure, they’re impressive — but if that’s all you’re using, you’re doing it wrong. ...",
        date: "25 December 2024",
        readTime: "5 min"
    },
    {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "ChatGPT: Changing the Landscape of Coding Standards",
        description: "In recent years, ChatGPT has revolutionized the way developers approach software development. As an AI-powered language model, it assists with tasks ranging...",
        date: "22 December 2024",
        readTime: "4 min"
    },
    {
        category: "TECHNOLOGY",
        title: "The Future of Quantum Computing: A Tomorrow’s Technology",
        description: "Quantum computing, once a concept confined to science fiction, is steadily progressing towards becoming a reality that could revolutionize numerous industries. ...",
        date: "20 December 2024",
        readTime: "7 min"
    },
    {
        category: "TECHNOLOGY",
        title: "Why Linux and Not Windows?",
        description: "Linux has carved a niche for itself across servers, embedded systems, and increasingly, desktops as well. Let’s explore why many users, developers, and organizations choose Linux over Windows and why you might consider switching too....",
        date: "18 December 2024",
        readTime: "6 min"
    },
    {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "Introducing OpenAi Whisper",
        description: "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and...",
        date: "15 December 2024",
        readTime: "8 min"
    },
    {
        category: "TECHNOLOGY",
        title: "Sending Email with Laravel 10 and Gmail",
        description: "Sending email with Gmail via a third-party application has undergone several changes for security reasons. Now to send email using Google SMTP you need to activate 2 step verification...",
        date: "12 December 2024",
        readTime: "5 min"
    },
    {
        category: "TECHNOLOGY",
        title: "TanStack Query v5: A Guide to Installation and Basic Fetch Example",
        description: "When building modern web applications, managing server state efficiently is crucial. TanStack Query (formerly React Query) has become the go-to library for handling server state in React applications...",
        date: "10 December 2024",
        readTime: "6 min"
    },
    {
        category: "TECHNOLOGY",
        title: "17 Mindblowing Github Repositories You Never Knew Existed",
        description: "Learning to code is relatively easy, but mastering the art of writing better code is much tougher. GitHub serves as a treasure trove for developers, where the...",
        date: "8 December 2024",
        readTime: "9 min"
    },
    {
        category: "TECHNOLOGY",
        title: "🚀PHP8.4 is Here: Discover What's New with Examples!",
        description: "The latest release of PHP, <b>PHP 8.4,</b> is packed with features that simplify code, improve performance, and align with modern development practices. Here’s a quick look at the highlights...",
        date: "5 December 2024",
        readTime: "5 min"
    },
    {
        category: "TECHNOLOGY",
        title: "A Comprehensive Guide to FFmpeg: Installation and Basic Commands",
        description: "A powerful open-source tool for handling multimedia data, including audio, video, and other related files. It is widely used by developers, media professionals...",
        date: "2 December 2024",
        readTime: "7 min"
    }
];

export default function Blog() {
    return (
        <div className='stories'>
            <h1 className='display-4 fw-bold m-0'>Stories</h1>
            <span className='text-muted'>27 December 2024 . {blogData.length} stories</span>
            <div className="blog-list mt-5">
                {blogData.map((blog, index) => (
                    <motion.div
                        key={index} className='blog-parent mb-5'
                        initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <span className='text-muted category-span'>{blog.category}</span>
                        <h2 className='m-0 fw-bold'>{blog.title}</h2>
                        <p className='m-0 mb-1'>{blog.description}</p>
                        <span className='text-muted category-span'>{blog.date} . {blog.readTime}</span>
                    </motion.div>
                ))}
            </div>
            {/* <div className='mt-3'>
                <div className='d-flex justify-content-center gap-2 mb-2'>
                    <button className='pagination-previous pagination-button'><ChevronLeft /></button>
                    <button className='pagination-current pagination-button'>1</button>
                    <button className='pagination-number pagination-button'>2</button>
                    <button className='pagination-number pagination-button'>3</button>
                    <button className='pagination-number pagination-button'>4</button>
                    <button className='pagination-dots pagination-button'>...</button>
                    <button className='pagination-number pagination-button'>10</button>
                    <button className='pagination-next pagination-button'><ChevronRight /></button>
                </div>
            </div> */}
        </div>
    );
}