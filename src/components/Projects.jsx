import { translations } from '../data/translation';
import { useLanguage } from '../contexts/LanguageContext';
// import { projectsData } from '../data/projects';

function Projects() {

  const { language } = useLanguage()
  const t = translations[language]


  return (
    <section id="projects" className="py-20 text-white ">
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          {t.projects.title}
        </h2>
        <div className='grid grid-cols-2 lg-grid-cols-3 gap-6'>
          <div className="card bg-gray-800/50 backdrop:blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <figure className='px-4 pt-4'>
              <img
                src="../src/assets/fintrack-iphone.png"
                alt="Shoes"
                className='object-cover h-96'
                /
              >
            </figure>

            <div className="card-body">
              <h2 className="card-title text-purple-400">{t.projects.project1.title}</h2>
              <p className='card-description text-gray-300'>{t.projects.project1.description}</p>
              <span className='badge'> React</span>
              <div className="card-actions justify-center">
                <button className="btn btn-primary mr-4">Demo</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-gray-800/50 backdrop:blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <figure className='px-4 pt-4'>
              <img
                src="../src/assets/fintrack-iphone.png"
                alt="Shoes"
                className='object-cover h-96'
                /
              >
            </figure>

            <div className="card-body">
              <h2 className="card-title text-purple-400">{t.projects.project1.title}</h2>
              <p className='card-description text-gray-300'>{t.projects.project1.description}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary mr-4">Demo</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-gray-800/50 backdrop:blur-sm border-2 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <figure className='px-4 pt-4'>
              <img
                src="../src/assets/fintrack-iphone.png"
                alt="Shoes"
                className='object-cover h-96'
                /
              >
            </figure>

            <div className="card-body">
              <h2 className="card-title text-purple-400">{t.projects.project1.title}</h2>
              <p className='card-description text-gray-300'>{t.projects.project1.description}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary mr-4">Demo</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;