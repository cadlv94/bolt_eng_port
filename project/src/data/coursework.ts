export interface Course {
  title: string;
  code: string;
  description: string;
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const coursework: Course[] = [
  {
    title: "Neural Systems and Control",
    code: "BME 4401",
    description: "Advanced study of neural systems and control mechanisms in biological systems, including neural signal processing and motor control.",
    projects: [
      {
        title: "Neural Signal Processing",
        description: "Developed algorithms for processing and analyzing EEG signals to detect sleep patterns.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800"
      }
    ]
  },
  {
    title: "BioTransport Phenomena",
    code: "BME 4100",
    description: "Study of materials used in biomedical applications, their properties, and interactions with biological systems.",
    projects: [
      {
        title: "Hydrogel Development",
        description: "Created and characterized novel hydrogels for drug delivery applications.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800"
      }
    ]
  },
  {
    title: "Medical Device Design",
    code: "BME 4090",
    description: "Comprehensive course on medical device development, from concept to prototype.",
    projects: [
      {
        title: "Wearable ECG Monitor",
        description: "Designed and prototyped a compact wearable ECG monitoring device.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
      }
    ]
  }
];