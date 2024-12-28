import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
const blogData = [
    {
        category: "TECHNOLOGY",
        title: "AI in Everyday Life",
        description: "Artificial intelligence is reshaping how we interact with technology daily, from smart assistants to recommendation systems...",
        date: "25 December 2024",
        readTime: "5 min"
    },
    {
        category: "HEALTH",
        title: "The Benefits of Regular Exercise",
        description: "Exercise not only keeps you fit but also boosts mental health and overall well-being...",
        date: "22 December 2024",
        readTime: "4 min"
    },
    {
        category: "FINANCE",
        title: "Understanding Cryptocurrency",
        description: "Cryptocurrency is a digital currency that operates independently of a central authority...",
        date: "20 December 2024",
        readTime: "7 min"
    },
    {
        category: "ETHICS",
        title: "The Ethical Dilemmas of AI",
        description: "As AI becomes more pervasive, ethical considerations about its use and impact grow increasingly important...",
        date: "18 December 2024",
        readTime: "6 min"
    },
    {
        category: "ENVIRONMENT",
        title: "Climate Change and Its Impact",
        description: "Climate change poses one of the biggest challenges to humanity, affecting ecosystems and economies worldwide...",
        date: "15 December 2024",
        readTime: "8 min"
    },
    {
        category: "EDUCATION",
        title: "Online Learning Trends",
        description: "With advancements in technology, online learning is becoming more accessible and effective for students globally...",
        date: "12 December 2024",
        readTime: "5 min"
    },
    {
        category: "TRAVEL",
        title: "Top Destinations for 2025",
        description: "Explore the best travel destinations for the upcoming year, offering breathtaking views and cultural experiences...",
        date: "10 December 2024",
        readTime: "6 min"
    },
    {
        category: "TECHNOLOGY",
        title: "The Future of Quantum Computing",
        description: "Quantum computing promises to revolutionize industries by solving problems beyond the reach of classical computers...",
        date: "8 December 2024",
        readTime: "9 min"
    },
    {
        category: "HEALTH",
        title: "Nutrition Myths Debunked",
        description: "Separating fact from fiction in the world of nutrition can help you make informed dietary choices...",
        date: "5 December 2024",
        readTime: "5 min"
    },
    {
        category: "FINANCE",
        title: "Investing for Beginners",
        description: "Learn the basics of investing and how to grow your wealth over time with smart financial decisions...",
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
            <div className='mt-3'>
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
            </div>
        </div>
    );
}