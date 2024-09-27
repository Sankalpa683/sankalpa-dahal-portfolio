import React from 'react';
import Link from 'next/link';
import { Linkedin, MailMinus } from 'lucide-react';

const CTA = () => {
    return (
        <section className='py-16 px-6 bg-gray-50'>
            <div className='max-w-4xl mx-auto text-center bg-white border border-blue-400 p-8 rounded-lg '>
                <p className='text-gray-500 text-sm lg:text-md mb-4'>👋 Hey, Thanks for stopping by...</p>

                <h1 className='text-2xl sm:text-4xl font-semibold mb-6'>
                    Are you still interested in working with me?
                </h1>

                <p className='text-gray-600 text-lg sm:text-xl mb-8'>
                    If you’re still interested, don’t hesitate to get in touch. I’d love to hear your ideas and discuss how we can collaborate to create something amazing together. Let’s make it happen!
                </p>

                <div className='flex flex-row items-center justify-center gap-4'>
                    <Link href="mailto:sank.dahal@gmail.com" className="mt-4 py-2.5 px-6 flex flex-row gap-2 text-md bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-indigo-100">
                    <MailMinus /> Gmail
                    </Link>
                    <Link href="https://www.linkedin.com/in/sankalpa-dahal-a4950a1a4/" target='_blank' className="mt-4 text-md flex gap-2 items-center py-2.5 px-6 bg-linked text-white rounded-lg cursor-pointer  text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">
                        <Linkedin className=''/> LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
