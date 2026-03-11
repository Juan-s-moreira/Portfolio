
import { projectsData } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-20 text-white ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Projetos de Destaque</h2>
        
        {/* O Grid que vai segurar os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* O Loop Mágico do React */}
          {projectsData.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              
              {/* Imagem do Projeto */}
              <img 
                src={project.image} 
                alt={`Preview do ${project.title}`} 
                className="w-full h-48 object-cover"
              />
              
              {/* Conteúdo do Card */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-700 rounded-full text-green-400">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 h-20">
                  {project.description}
                </p>
                
                {/* Loop das Tags de Tecnologia */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botões de Ação */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                       className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors text-sm font-semibold">
                      🔗 Acessar
                    </a>
                  )}
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
                     className="flex-1 text-center border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white py-2 rounded transition-colors text-sm font-semibold">
                    🐈‍⬛ Repositório
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