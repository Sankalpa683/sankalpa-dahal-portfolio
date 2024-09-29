import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c1220] text-white py-12 px-4 md:px-8">
      {/* Footer container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-400 hover:text-white">
                Project
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-400 hover:text-white">
                Skills
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank" className="text-gray-400 hover:text-white">
                Responsive Design
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Web_development" target="_blank" className="text-gray-400 hover:text-white">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Application_security" target="_blank" className="text-gray-400 hover:text-white">
                Web Application Security 
              </Link>
            </li>

          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://www.instagram.com/thejuly20th/" className="text-gray-400 hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/SankIsMe" className="text-gray-400 hover:text-white">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://x.com/masculinmaster" className="text-gray-400 hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Sankalpa683" className="text-gray-400 hover:text-white">
                Github
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/sankalpa-dahal-a4950a1a4/" className="text-gray-400 hover:text-white">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li>sank.dahal@gmail.com</li>
            <li>Biratnagar, Nepal</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom: Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Copyright &copy; 2024 Sankalpa Dahal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
