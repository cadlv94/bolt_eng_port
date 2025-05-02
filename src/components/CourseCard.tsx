import { motion } from 'framer-motion';
import type { Course } from '../data/coursework';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-xl">{course.title}</h3>
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {course.code}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{course.description}</p>
        
        <h4 className="font-semibold text-lg mb-4">Course Projects</h4>
        <div className="space-y-4">
          {course.projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="font-medium text-lg mb-2">{project.title}</h5>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}