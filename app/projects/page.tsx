import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const projects = [
  {
    title: "Semantic Segmentation of Indoor Point Clouds",
    period: "2026 – Present",
    description:
      "Developing approaches for improving semantic segmentation accuracy of building environments by integrating images and point clouds with zero-shot techniques and Vision Language Models (VLMs).",
    tools: ["Python", "VLMs", "Foundation Models", "Point Cloud Processing"],
  },
  {
    title: "Bin Picking Using Robotic Arm Manipulation",
    period: "2025 – Present",
    description:
      "Developing methods for real-time bin picking using robotic arms in controlled environments, integrating AI, computer vision, and multi-modal sensors for object detection and manipulation.",
    tools: ["Python", "Computer Vision", "Robotic Arms", "Multi-modal Sensors"],
  },
  {
    title: "Dimensional Quality Assessment of Precast Concrete Panels",
    period: "2023 – 2025",
    description:
      "Developed a methodology for precise dimensional quality assessment of precast concrete panels by estimating edge lines from point cloud data, and proposed a data-fusion technique integrating image and point cloud data for rapid evaluation of bridge deck panels.",
    tools: ["MATLAB", "Python", "TLS", "Point Cloud", "BIM/IFC"],
  },
  {
    title: "Dimensional Quality Assessment of Structural Steel Members",
    period: "2023 – 2025",
    description:
      "Developed an automated method for accurate cross-sectional dimensional assessment of structural steel using terrestrial laser scanning. Proposed an edge-loss compensation model that significantly improved measurement accuracy from low-resolution TLS point clouds.",
    tools: ["MATLAB", "Python", "TLS", "Point Cloud Processing"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col">
      <Navbar />

      {/* Page header */}
      <div className="bg-emerald-900 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-emerald-300 text-sm mt-2">Research and development projects</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-emerald-900 rounded-xl p-6 flex flex-col gap-3">
              <div>
                <h2 className="text-lg font-bold leading-snug">{project.title}</h2>
                <p className="text-xs text-orange-400 uppercase tracking-widest mt-1">{project.period}</p>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
