const projects = [
  {
    title: 'Hello Cleaning Facility',
    description: 'Online booking system for a Sydney-based cleaning service, offering customizable cleaning options.',
    image: '/hellocleaning.jpg',
    link: 'https://hellocleaning.vercel.app/',
  },
  {
    title: 'Gurkha Supermarket Grocery Store',
    description: 'E-commerce platform built for an Australian grocery store, featuring a seamless shopping experience.',
    image: '/gurkhasupermarket.jpg',
    link: 'https://www.gurkhasupermarket.com/',
  },
  {
    title: 'Project Nature Nepal',
    description: 'Website designed for a Nepal-based environmental project, promoting eco-friendly initiatives.',
    image: '/projectnaturenepal.jpg',
    link: 'https://projectnaturenepal.org.np/',
  },
  {
    title: 'Hotel & Restaurant (on sale)',
    description: 'Fully functional hotel and restaurant website. Contact me if you are interested in purchasing this website.',
    image: '/hotelandresturant.jpg',
    link: 'https://hotel-and-resturant.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 mx-3 sm:mx-0">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl sm:text-4xl font-bold text-start mb-3">Featured <span className="text-blue-500">Projects</span></h2>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg text-gray-700">Project's on which i have worked so far</p>
          <a href="" className="text-blue-600 hidden sm:block md:block lg:block">See all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 w-full gap-5 ">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg my-4 overflow-hidden transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-4 text-blue-500 block hover:underline">View Live →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
