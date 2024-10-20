"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { React, useState } from "react";

const projects = [
  {
    title: 'Hello Cleaning Facility',
    description: 'Online booking system for a Sydney-based cleaning service, offering customizable cleaning options.',
    image: '/hellocleaning.jpg',
    link: 'https://hellocleaning.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'Google Forms', 'Magic UI', 'Acertenity UI'],
    duration: '3 weeks',
    details: 'Developed an intuitive online booking system for a cleaning company in Sydney. The system allows users to book cleaning services, select specific options, and manage appointments through a responsive UI.'
  },
    {
    title: 'Informal Study',
    description: 'A Next.js platform offering comprehensive +2 NEB notes for 12th-grade students.',
    image: '/informalstudy.jpg',
    link: 'https://informalstudy.info/',
    techStack: ['Next.js', 'Tailwind CSS', 'Google Drive', 'Mantine UI'],
    duration: '4 weeks',
    details: 'Built a responsive educational platform for NEB 12th-grade students. It provides structured and easily accessible notes, helping students prepare for their +2 exams with a user-friendly interface.'
  },
    {
    title: 'Gurkha Supermarket Grocery Store',
    description: 'E-commerce platform built for an Australian grocery store, featuring a seamless shopping experience.',
    image: '/gurkhasupermarket.jpg',
    link: 'https://gurkhastore.vercel.app/',
    techStack: ['Next.js', 'Shadcn', 'Tailwind CSS', 'Firebase', 'Axios', 'Vercel Hosting'],
    duration: '1 month',
    details: 'Created a full e-commerce solution for an Australian grocery store. The platform supports online orders, delivery management, and product filtering, providing a streamlined shopping experience.'
  },
  {
    title: 'Project Nature Nepal',
    description: 'Website designed for a Nepal-based environmental project, promoting eco-friendly initiatives.',
    image: '/projectnaturenepal.jpg',
    link: 'https://projectnaturenepal.org.np/',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    duration: '1 weeks',
    details: 'Built a platform to promote environmental projects and eco-friendly initiatives in Nepal. The website features information on sustainability projects and resources to help spread environmental awareness.'
  },
  {
    title: 'Hotel & Restaurant (on sale)',
    description: 'Fully functional hotel and restaurant website. Contact me if you are interested in purchasing this website.',
    image: '/hotelandresturant.jpg',
    link: 'https://hotel-and-resturant.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'API Integrations'],
    duration: '2 weeks',
    details: 'A fully functional hotel and restaurant website with reservation capabilities. It’s available for purchase and customization according to specific business needs.'
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 mx-3 sm:mx-0">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl sm:text-4xl font-bold text-start mb-3">Featured <span className="text-blue-500">Projects</span></h2>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg text-gray-700">Project's on which i have worked so far</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 w-full gap-5 ">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg my-4 overflow-hidden transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="flex mt-6 justify-between items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        className="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                      </DialogHeader>
                      <div className="py-4 px-2 text-gray-600">
                        <p><strong>Description:</strong> {selectedProject?.details}</p>
                        <p className="mt-2"><strong>Duration:</strong> {selectedProject?.duration}</p>
                        <p className="mt-2 w-full flex flex-row flex-wrap">
                          {selectedProject?.techStack.map((tech, index) => (
                            <button
                              key={index}
                              className="py-1 m-1 px-2 text-sm bg-indigo-100 text-indigo-600 rounded-lg shadow-sm transition-all duration-300 hover:bg-indigo-200"
                            >
                              {tech}
                            </button>
                          ))}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <a href={project.link} className="text-blue-500 block hover:underline">
                    View Live →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
