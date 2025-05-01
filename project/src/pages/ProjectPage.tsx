import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Syringe } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageSlideshow } from '../components/ImageSlideshow';

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="container mx-auto px-6">
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <div className="bg-gray-900 text-white p-8">
            <div className="flex items-center gap-3 mb-4">
              <Syringe className="w-8 h-8" />
              <h1 className="text-4xl font-bold">{project.title}</h1>
            </div>
            {project.subtitle && (
              <h2 className="text-xl text-gray-300 mb-2">{project.subtitle}</h2>
            )}
            {project.teamLead && (
              <p className="text-gray-400">
                <span className="font-medium">Team Lead:</span> {project.teamLead}
              </p>
            )}
          </div>

          <ImageSlideshow images={project.images} />
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div className="prose max-w-none">
              {project.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </div>
            
            {project.features && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.contributions && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Contributions</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="text-gray-600">{contribution}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.technologies && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Technologies & Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}