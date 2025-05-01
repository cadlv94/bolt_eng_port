export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: "FDA 21 CFR Part 820: Quality System Regulation",
    issuer: "ComplianceOnline",
    date: "2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
    link: "#",
    description: "Comprehensive training in FDA medical device quality system requirements."
  },
  {
    title: "Achieving Best Practices: Sterile Compounding",
    issuer: "LP3 Network",
    date: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    link: "#",
    description: "Advanced course in medical device development and regulatory requirements."
  },
  {
    title: "Six Sigma Lean: Yellow Belt",
    issuer: "ASTM International",
    date: "2022",
    image: "https://images.unsplash.com/photo-1581093458791-4b41ce2d250a?auto=format&fit=crop&w=800",
    link: "#",
    description: "Certification in biocompatibility testing procedures and standards."
  }
];