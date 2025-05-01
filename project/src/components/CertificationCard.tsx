import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Certification } from '../data/certifications';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <img 
        src={certification.image} 
        alt={certification.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl">{certification.title}</h3>
          <span className="text-sm font-medium text-blue-600">
            {certification.date}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">Issued by {certification.issuer}</p>
        <p className="text-gray-600 mb-4">{certification.description}</p>
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View Certificate
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
}