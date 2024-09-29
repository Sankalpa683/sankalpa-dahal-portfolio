import React from 'react';
import Navbar from '@/app/components/Header';
import { ArrowRight } from "lucide-react";

const expertiseContent = {
  nextjs: {
    title: "Next.js Development",
    description:
      "I specialize in building dynamic, high-performance web applications using Next.js. My focus is on delivering seamless user experiences with optimized SEO, server-side rendering (SSR), and static site generation (SSG) capabilities. I've worked on a variety of projects that demonstrate my ability to leverage Next.js for both performance and scalability.",
    projects: [
      {
        title: 'Hello Cleaning Facility',
        description:
          'Developed an online booking system with real-time updates and server-side rendering to ensure a smooth user experience. The system allows customers to customize cleaning options and see booking summaries in real-time.',
        link: 'https://hellocleaning.vercel.app/',
        image: '/hellocleaning.jpg',
      },
      {
        title: 'Gurkha Supermarket Grocery Store',
        description:
          'Built an e-commerce platform with product filtering, search functionality, and SEO-optimized pages for a seamless online shopping experience.',
        link: 'https://www.gurkhasupermarket.com/',
        image: '/gurkhasupermarket.jpg',
      },
    ],
  },
  websecurity: {
    title: "Web Security",
    description:
      "As a bug hunter and security enthusiast, I prioritize secure coding practices and proactively mitigate vulnerabilities in web applications. My expertise spans identifying and defending against security risks such as XSS, SQL injection, and other common threats.",
    projects: [
      {
        title: 'Security Audits & Penetration Testing',
        description:
          'Performed comprehensive security audits for clients, identifying potential vulnerabilities and implementing security measures to ensure a safer web experience.',
        link: '#',
        image: '/security-project.jpg',
      },
    ],
  },
  responsivedesign: {
    title: "Responsive Design",
    description:
      "Creating responsive and visually appealing designs that ensure a consistent experience across devices is at the core of my front-end development. From mobile to desktop, I ensure that the layout adjusts gracefully while maintaining functionality and usability.",
    projects: [
      {
        title: 'Project Nature Nepal',
        description:
          'Designed a responsive site promoting eco-friendly initiatives, ensuring that the site is accessible and attractive across all device types.',
        link: 'https://projectnaturenepal.org.np/',
        image: '/projectnaturenepal.jpg',
      },
    ],
  },
};

export default function Learn({ params }) {
  const { slug } = params;
  const content = expertiseContent[slug] || {};

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <section className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Title Section */}
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">{content.title}</h1>
          <p className="text-gray-600 text-center sm:text-lg lg:text-xl max-w-3xl">
            {content.description}
          </p>
        </section>
      </main>
    </>
  );
}
