import { Gabarito } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import "./globals.css";

// Import Gabarito font from Google Fonts
const gabarito = Gabarito({
  subsets: ["latin"], // Define the subset you need (you can change this based on your language needs)
  variable: "--font-gabarito", // This is the CSS variable to use for the font
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata = {
  title: "Sankalpa Dahal - Freelance Web Developer from Nepal",
  description: "Sankalpa Dahal is a highly skilled freelance web developer from Nepal, specializing in Next.js, HTML, CSS, and web security.",
  keywords: "Sankalpa Dahal, freelance web developer, web developer Nepal, Next.js developer, HTML, CSS, JavaScript, web security, SEO developer",
  author: "Sankalpa Dahal",
  og: {
    title: "Sankalpa Dahal - Freelance Web Developer from Nepal",
    description: "Need a skilled web developer? Sankalpa Dahal offers freelance web development services specializing in Next.js, HTML, CSS, and JavaScript.",
    image: "/banner.jpg", // Replace with your image path
    url: "http://sankalpadahal.com/", // Your site's URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalpa Dahal - Freelance Web Developer from Nepal",
    description: "Expert freelance web developer specializing in modern web technologies like Next.js, JavaScript, and more.",
    image: "/banner.jpg", // Replace with your image path
    site: "@masculinmaster", // Your Twitter username
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Structured Data JSON-LD for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sankalpa Dahal",
            "description": "Freelance web developer from Nepal specializing in modern web development technologies like Next.js, HTML, CSS, and web security.",
            "jobTitle": "Freelance Web Developer",
            "url": "http://sankalpadahal.com/", // Replace with your site's URL
            "sameAs": [
              "https://www.linkedin.com/in/sankalpa-dahal-a4950a1a4/",
              "https://x.com/masculinmaster",
              "https://github.com/Sankalpa683",
              "https://www.facebook.com/SankIsMe",
              "https://www.instagram.com/thejuly20th/",
            ]
          })}
        </script>
      </Head>
      <body className={`${gabarito.variable} antialiased min-h-screen flex flex-col`}>
        {/* Main Content - Takes up all available space */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Sticky Footer */}
        <Footer />

      </body>
    </html>
  );
}
