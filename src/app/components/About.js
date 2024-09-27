import { ArrowUpRight, Palette } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8">
          I'm Passionate About <span className="text-blue-500">Next.js Development</span> and <span className="text-blue-500">Web Security</span>
        </h1>

        {/* Description Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 py-4 sm:py-8">
          <div className="flex-shrink-0 hidden sm:flex">
            <div className="border-2 border-gray-800 cursor-pointer p-6 rounded-full transition-transform transform hover:scale-125 shadow-lg">
              <ArrowUpRight className="text-gray-800 w-6 h-6" />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              I am Sankalpa Dahal, an 18-year-old front-end developer specializing in Next.js. With a solid foundation in web development and a keen interest in web security, I strive to build responsive, user-friendly applications while ensuring robust security practices. My journey began with self-study and hands-on projects, and I am committed to continuous learning and improvement.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/** Service Card 1 */}
          <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4 text-black my-4">
              <Palette className="w-8 h-8" />
              <h2 className="font-bold text-lg">Next.js Development</h2>
            </div>
            <p className="text-gray-500">
              Building dynamic and high-performance web applications using Next.js, focusing on SEO and server-side rendering.
            </p>
            <a href="#learn-more" className="mt-4 py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-indigo-100">
              Learn More
            </a>
          </div>
          
          {/** Service Card 2 */}
          <div className="border-2 border-blue-500 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4 text-blue-500 my-4">
              <Palette className="w-8 h-8" />
              <h2 className="font-bold text-lg">Web Security</h2>
            </div>
            <p className="text-gray-500 text-start">
              Implementing security best practices to protect applications against common vulnerabilities and threats.
            </p>
            <a href="#learn-more" className="mt-4 py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer  text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">
              Learn More
            </a>
          </div>
          
          {/** Service Card 3 */}
          <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4 text-black my-4">
              <Palette className="w-8 h-8" />
              <h2 className="font-bold text-lg">Responsive Design</h2>
            </div>
            <p className="text-gray-500 text-start">
              Creating responsive layouts that provide an optimal viewing experience across various devices and screen sizes.
            </p>
            <a href="#learn-more" className="mt-4 py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer text-center shadow-xs transition-all duration-500 hover:bg-indigo-100">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}