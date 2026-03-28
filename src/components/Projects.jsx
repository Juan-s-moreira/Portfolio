import { translations } from '../data/translation';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
// import { projectsData } from '../data/projects';

function Projects() {

  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    { id: 1, data: t.projects.project1, img: "../src/assets/fintrack-iphone.png", tags: ["React", "Node", "Tailwind", "MongoDB"], demo: "https://fintrack-steel-six.vercel.app", github: "https://github.com/Juan-s-moreira/fintrack" },
    { id: 2, data: t.projects.project2, img: "../src/assets/sinais-em-foco.png", tags: ["JavaScript", "HTML5", "CSS3", "Mobile-First"], demo: "https://juan-s-moreira.github.io/Sinais-Em-Foco/", github: "https://github.com/Juan-s-moreira/Sinais-Em-Foco" },
    { id: 3, data: t.projects.project3, img: "../src//assets/greenmanager.jpg", tags: ["JavaScript", "HTML", "CSS", "GIT"], github: "https://github.com/JeanPDR/GreenManager-FrontEnd" },
  ];


  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 text-white ">
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          {t.projects.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <div className="card bg-gray-800/50 backdrop:blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden" key={project.id}>
              <figure className='relative h-72 overflow-hidden flex justify-center'>
                <img
                  src={project.img}
                  alt={project.data.title}
                  className='w-full h-full object-contain transition-transform duration-500 hover:scale-105'
                /
                >
              </figure>
              <div className="card-body p-5 flex flex-col">
                <h2 className="card-title text-purple-400 text-lg font-bold mb-1">{project.data.title}</h2>
                <p className='card-description text-gray-300 text-md mb-2 line-clamp-4'>{project.data.description}</p>
                <div className='flex flex-wrap gap-2 my-4 '>
                  {project.tags?.map((tag) => (
                    <span className="badge badge-outline border-purple-500/50 text-purple-300 text-xs"
                      key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-center gap-3 mt-auto pt-4 ">
                  {project.demo && (

                    <a href={project.demo} target='_blank' className="btn btn-primary btn-sm flex-1 bg-purple-600 border-none hover:bg-purple-700 text-white">
                      <ExternalLink />
                    </a>
                  )}
                  <a href={project.github} className="btn btn-outline btn-sm flex-1 border-purple-600 text-purple-400 hover:bg-purple-600 hover:border-purple-600">
                    <Github />
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

export default Projects;