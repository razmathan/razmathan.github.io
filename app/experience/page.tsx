import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const research = [
  {
    role: "Research Assistant",
    org: "Smart Construction & Systems Lab, Chungbuk National University",
    advisor: "Prof. Min-Koo Kim",
    period: "2026 – Present",
    points: [
      "Developing frameworks for semantic segmentation of building interiors using foundation models and Vision Language Models (VLMs).",
      "Improving semantic and instance segmentation accuracy of steel structures using synthetic point cloud data and deep learning-based occlusion reconstruction.",
      "Developing synthetic data generation and AI-assisted techniques for real-time object detection in bin-picking using robotic arms.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Built Environment Research Center, Sungkyunkwan University",
    advisor: "Prof. Min-Koo Kim",
    period: "2025",
    points: [
      "Investigated technical challenges of mobile robot operation in indoor confined construction environments.",
      "Studied human-robot collaboration techniques and analysed adaptability and limitations for indoor construction processes.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    org: "Smart Construction Laboratory, Sungkyunkwan University & Chungbuk National University",
    advisor: "Prof. Sung-Han Sim · Prof. Min-Koo Kim",
    period: "2023 – 2025",
    points: [
      "Developed an automated method for accurate cross-sectional dimensional assessment of structural steel using terrestrial laser scanning point cloud data.",
      "Proposed a precise edge line estimation method to infer actual edges of target objects from low-resolution TLS point clouds.",
    ],
  },
];

const work = [
  {
    role: "3D Modeler",
    org: "Rendersoft Systems India Pvt. Ltd., Chennai, India",
    period: "2020 – 2022",
    points: [
      "Modelled detailed BIM models of buildings based on architectural drawings using AutoCAD, 3Ds Max, and Blender.",
    ],
  },
  {
    role: "CAD Trainer",
    org: "CADD Centre Training Services, Chennai, India",
    period: "2018 – 2020",
    points: [
      "Conducted training for 2D and 3D CAD modeling and construction scheduling software.",
      "Supervised college students on design projects emphasising practical application of CAD tools.",
    ],
  },
];

function TimelineItem({
  role, org, advisor, period, points,
}: {
  role: string; org: string; advisor?: string; period: string; points: string[];
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-emerald-800" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-orange-400 ring-2 ring-emerald-950" />

      <div className="mb-1 flex flex-wrap items-baseline gap-3">
        <h3 className="text-lg font-bold">{role}</h3>
        <span className="text-xs text-orange-400 uppercase tracking-widest">{period}</span>
      </div>
      <p className="text-sm text-emerald-300 mb-1">{org}</p>
      {advisor && <p className="text-xs text-emerald-500 mb-3">Advisor: {advisor}</p>}
      <ul className="space-y-1.5">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col">
      <Navbar />

      {/* Page header */}
      <div className="bg-emerald-900 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p className="text-emerald-300 text-sm mt-2">Research and professional background</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-1">

        <h2 className="text-xl font-semibold mb-8 text-orange-400 border-b border-emerald-800 pb-2">
          Research Experience
        </h2>
        <div className="mb-14">
          {research.map((item) => (
            <TimelineItem key={item.role + item.period} {...item} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-8 text-orange-400 border-b border-emerald-800 pb-2">
          Work Experience
        </h2>
        <div>
          {work.map((item) => (
            <TimelineItem key={item.role + item.period} {...item} />
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
