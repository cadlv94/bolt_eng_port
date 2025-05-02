import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function ProjectCard({ title, description, image, slug }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-64 overflow-hidden bg-gray-100">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/projects/${slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
}