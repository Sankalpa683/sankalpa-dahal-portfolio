import { CheckCircle, CodeXml, FileCode2, FileJson, SquareDashedBottomCode, DatabaseZap, LockIcon, ShieldCheckIcon  } from "lucide-react";

export default function Skillset() {
    return (
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Title */}
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-8">
                    My Skillset in <span className="text-blue-500">Web Development</span>
                </h1>

                {/* Description Section */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
                        I have a diverse skill set that enables me to build high-quality web applications. Here are some of the key technologies I work with:
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/** Skill Card 1 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <CodeXml className="w-8 h-8" />
                            <h2 className="font-bold text-lg">HTML & CSS</h2>
                        </div>
                        <p className="text-gray-500">
                            Proficient in creating responsive layouts and styling using modern CSS techniques and frameworks like Tailwind CSS.
                        </p>
                    </div>

                    {/** Skill Card 2 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <FileCode2 className="w-8 h-8" />
                            <h2 className="font-bold text-lg">JavaScript</h2>
                        </div>
                        <p className="text-gray-500">
                            Strong understanding of JavaScript fundamentals and experience with ES6+, asynchronous programming, and APIs.
                        </p>
                    </div>

                    {/** Skill Card 3 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <FileJson className="w-8 h-8" />
                            <h2 className="font-bold text-lg">Next.js</h2>
                        </div>
                        <p className="text-gray-500">
                            Experienced in building server-side rendered applications using Next.js, focusing on performance and SEO optimization.
                        </p>
                    </div>

                    {/** Skill Card 4 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <SquareDashedBottomCode className="w-8 h-8" />
                            <h2 className="font-bold text-lg">React</h2>
                        </div>
                        <p className="text-gray-500">
                            Skilled in building interactive user interfaces and managing state with React, using hooks and context API.
                        </p>
                    </div>

                    {/** Skill Card 5 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <DatabaseZap className="w-8 h-8" />
                            <h2 className="font-bold text-lg">Firebase & Supabase</h2>
                        </div>
                        <p className="text-gray-500">
                            I use Backend as a Service platforms like Firebase and Supabase for backend management of Database & Auth.
                        </p>
                    </div>


                    {/** Skill Card 6 */}
                    <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-start transition-transform transform hover:scale-105">
                        <div className="flex items-center gap-4 text-gray-600 my-4">
                            <ShieldCheckIcon className="w-8 h-8" />
                            <h2 className="font-bold text-lg">Web Security</h2>
                        </div>
                        <p className="text-gray-500">
                            Knowledgeable in implementing security best practices to protect web applications from vulnerabilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
