export const projects = [
  {
    title: "C-Rx Pen Injector",
    subtitle: "Senior Design Capstone | Biomedical Engineering EXPO Summer 2024 | 2nd Place Winner",
    teamLead: "Carlos Alvarez",
    slug: "crx-pen",
    description: "",
    image: "/bolt_eng_port/images/C-Rx Exec Sum.jpg",

    images: [
      "/bolt_eng_port/images/crx-pen.png",
      "/bolt_eng_port/images/C-Rx Assem 1.png",
      "/bolt_eng_port/images/C-Rx Assem 2.png", 
      "/bolt_eng_port/images/C-Rx Assembly Render.png",
      "/bolt_eng_port/images/CTRx Pen Pic.jpg", 
      "/bolt_eng_port/images/Sen Des Poster.jpg"
    ],
    fullDescription: [
      "The **C-RX Pen Injector** is a patient-centric drug delivery device designed for use in compounding pharmacies. It supports **borosilicate glass cartridges** and delivers precise 0.1 mL dosing, improving accessibility for patients with dexterity or vision issues. Unlike traditional vial-and-syringe setups, this pen injector simplifies administration, enhances safety, and reduces medical waste by over 95%.",
      "Designed using **PEEK** and **borosilicate glass**, the C-Rx Pen is meant to be implemented in the sterile pharmacy workflow, following current USP 797 standards, it is compatible with both aqueous and oil-based formulations. The device includes a dose dialer, reusable housing, and standard pen needle compatibility. Testing and validation were conducted in collaboration with **CTRx Compounding Pharmacy**, ensuring real-world usability and regulatory alignment."
    ],
    features: [
      "Precise 0.1 mL dosing mechanism",
      "Compatible with standard pen needles",
      "Reusable housing design",
      "Sterilizable components",
      "Ergonomic user interface",
      "95% reduction in medical waste"
    ],
    contributions: [
      "Led engineering design, CAD modeling in SolidWorks, and 3D printing",
      "Conducted material selection and regulatory strategy under FDA/ISO guidance",
      "Performed dose accuracy and sterility testing using analytical lab tools",
      "Integrated ergonomic, user-focused features into the final product",
      "Reduced packaging waste and improved medication adherence"
    ],
    technologies: [
      "SolidWorks CAD modeling",
      "PEEK & borosilicate glass material testing",
      "Risk analysis & regulatory compliance",
      "Injection mechanism design",
      "Verification & validation protocols",
      "Biomedical engineering design principles"
    ]
  },
  {
    title: "IUSD-Rx",
    slug: "iusd-rx",
    description: "Intra-Urethral suppository device for erectile dysfunction treatments.",
    image: "/bolt_eng_port/images/iusd-rx.jpg",
    images: [
      "/bolt_eng_port/images/iusd-rx.jpg",
      "https://images.unsplash.com/photo-1579684288538-c76a2fab9c19?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1579684453377-8f8c0e9f2d3c?auto=format&fit=crop&w=800"
    ],
    fullDescription: [
      "The IUSD-Rx device represents a revolutionary approach to erectile dysfunction treatment, developed in partnership with A&T Biomedical. This innovative medical device delivers medication directly through an intra-urethral suppository system.",
      "The device incorporates advanced materials and precise engineering to ensure patient comfort and treatment efficacy. Its design prioritizes safety and ease of use, making it a promising solution for both healthcare providers and patients."
    ],
    features: [
      "Precise medication delivery system",
      "Patient-friendly design",
      "Single-use sterile components",
      "Controlled release mechanism",
      "Minimal discomfort during application"
    ],
    technologies: [
      "Biocompatible materials",
      "Pharmaceutical grade components",
      "Sterile manufacturing",
      "Quality control systems",
      "Clinical testing protocols"
    ]
  },
  {
    title: "Engineering Portfolio Website",
    subtitle: "Developed using React, Vite, and GitHub Pages | Deployed in 2025",
    teamLead: "Carlos Alvarez",
    slug: "portfolio-site",
    description: "A fully responsive, single-page portfolio site built from scratch using Vite + React, showcasing engineering projects with routing, animation, and GitHub-based deployment.",
    image: "/bolt_eng_port/images/portfolio-preview.png",
    images: [
      "/bolt_eng_port/images/portfolio-preview.png",
      "/bolt_eng_port/images/portfolio-github.png",
      "/bolt_eng_port/images/portfolio-vite-structure.png"
    ],
    fullDescription: [
      "This portfolio website was developed using **React** and **Vite**, a modern front-end tooling setup that allows fast development and optimized production builds.",
      "I used **TypeScript**, **Tailwind CSS**, and component-based design to build modular pages for projects, skills, and certifications. The routing is handled using **React Router**, enabling a seamless single-page application (SPA) experience.",
      "Deployment is managed via **GitHub Pages** using the `gh-pages` package, and asset paths were configured carefully to accommodate GitHub’s static file hosting rules. Images and metadata are managed using a structured JSON-like dataset, and Framer Motion was used for animated transitions.",
      "The project emphasizes web deployment, responsive design, and real-world Git integration — demonstrating not only design skill, but full-stack delivery from local build to production deployment."
    ],
    features: [
      "Single Page Application (SPA) with React Router",
      "Animated page transitions using Framer Motion",
      "Custom project routing with slug-based URLs",
      "Mobile-first responsive design",
      "Dynamic content rendering from a centralized data file",
      "Live deployment via GitHub Pages using gh-pages CLI",
      "Image handling with GitHub Pages-compatible path resolution"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Git & GitHub",
      "GitHub Pages",
    ]
  }
];